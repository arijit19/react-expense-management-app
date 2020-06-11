import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseFilters from './ExpenseFilters.js'


const Dashboard = ()=>(
   <div>
        <ExpenseFilters/>
        <ExpenseList/>
   </div>
);

export default Dashboard;