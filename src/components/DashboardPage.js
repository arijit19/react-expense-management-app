import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseFilters from './ExpenseFilters.js'
import ExpensesSummary from './ExpensesSummary.js'


const Dashboard = ()=>(
   <div>
         <ExpensesSummary/>
        <ExpenseFilters/>
        <ExpenseList/>
   </div>
);

export default Dashboard;
console.log(process.env.NODE_ENV);