import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>(
    <header>
      <h1>Expense Tracker</h1>
      <p><NavLink exact activeClassName='active-class' to='/'>Home Page</NavLink></p>
      <p><NavLink activeClassName='active-class' to='/create'>Add Expense</NavLink></p>
      {/* <p><NavLink activeClassName='active-class' to='/edit'>Edit Expense</NavLink></p> */}
      <p><NavLink activeClassName='active-class' to='/help'>Help Page</NavLink></p>
    </header>
);

  export default Header;