import React from 'react';
import {connect} from 'react-redux';
// import { Router, Route, Switch} from 'react-router';
import { BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history'

import  { SetAuthAction } from '../Redux/Actions/AuthActions.js'
import {firebase} from '../firebase/firebase.js';
import Header from '../components/Header.js';
import Dashboard from '../components/DashboardPage.js';
import CreateExpense from '../components/CreateExpensePage.js';
import EditExpense from '../components/EditExpensePage.js';
import Help from '../components/HelpPage.js';
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
          {/* {!this.props.UID ? <Redirect to='/'/> : <Header/>} */}
          <Switch>
            {/* <Route path='/' exact={true} >{this.props.UID ? <Redirect to='/dashboard'/> : <LoginPage/> } </Route> */}
            <PublicRoute exact path='/' component={LoginPage}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <PrivateRoute path='/create' component={CreateExpense}/>
            <PrivateRoute path="/edit/:id" component={EditExpense}/> 
            <PrivateRoute path='/help' component={Help} />
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