import React from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

import Header from '../components/Header.js';
import Dashboard from '../components/DashboardPage.js'
import CreateExpense from '../components/CreateExpensePage.js';
import EditExpense from '../components/EditExpensePage.js';
import Help from '../components/HelpPage.js';
import PageNotFound from '../components/PageNotFound.js'

  class AppRouter extends React.Component {
    render(){
      return (
      <div>
         <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/create' component={CreateExpense} />
              <Route path="/edit/:id" component={EditExpense}/>
              <Route path='/help' component={Help} />
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
      );
    }
  }

  export default AppRouter;