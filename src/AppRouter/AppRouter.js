import React from 'react';
import {connect} from 'react-redux';
// import { Router, Route, Switch} from 'react-router';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history'

import  { SetAuthAction } from '../Redux/Actions/AuthActions.js'
import {firebase} from '../firebase/firebase.js';
import Dashboard from '../components/DashboardPage.js';
import CreateExpense from '../components/CreateExpensePage.js';
import EditExpense from '../components/EditExpensePage.js';
import PageNotFound from '../components/PageNotFound.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';


export const history = createBrowserHistory();

  class AppRouter extends React.Component {
    constructor(props) {
      super(props);
      this.handleAuth();
    }

    handleAuth = ()=> {
      firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            this.props.setAuthAction({UID: user.uid});
          }
          else {
            console.log("Logout");
            this.props.setAuthAction({UID: undefined});
          }
      })
    }

    render() {
      return (
        <Router>
        <div>
          <Switch>
            <PublicRoute exact path='/' component={LoginPage}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <PrivateRoute path='/create' component={CreateExpense}/>
            <PrivateRoute path="/edit/:id" component={EditExpense}/> 
            <Route component={PageNotFound}/>
          </Switch>
        </div>
       </Router>
      )
    }
  }

  const mapStateToProps = (state)=> { 
    return {
        UID: state.Auth.UID
    }
  }

  const mapDispatchToProps = (dispatch)=> {
    return {
      setAuthAction: (data)=> dispatch(SetAuthAction(data))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (AppRouter);