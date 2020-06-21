import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import { StartLogoutAction} from '../firebase/Actions/LogoutAction.js'
import  { SetAuthAction } from '../Redux/Actions/AuthActions.js'
import {firebase} from '../firebase/firebase.js'

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // this.handleAuth();
  }
  
   handleLogoutClick =  async function() {
     console.log(this.props);
     
    const res = await this.props.startLogoutAction();
    if(res !== null){
      this.props.setAuthAction({UID: undefined});
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <header>
        <h1>Expense Tracker</h1>
        <p><NavLink exact activeClassName='active-class' to='/' >Home Page</NavLink></p>
        <p><NavLink activeClassName='active-class' to='/create'>Add Expense</NavLink></p>
        <p><NavLink activeClassName='active-class' to='/help'>Help Page</NavLink></p>
        <button onClick={this.handleLogoutClick}>Logout</button>
      </header>
  );
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    startLogoutAction: ()=> dispatch(StartLogoutAction()),
    setAuthAction: (data)=> dispatch(SetAuthAction(data))
  }
}


export default connect(undefined,mapDispatchToProps) (withRouter(Header));