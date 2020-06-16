import React from 'react';
import {connect} from 'react-redux';

import ExpenseItem from './ExpenseItem.js';
import ExpenseSelector from '../Redux/selectors/ExpenseSelector.js';

export const ExpenseList = (props) => (
    <div>
        <h1>This is Expense List!</h1>
        {
           props.expenses.map((expense, index)=> <ExpenseItem key={expense.id} {...expense}/>)
        }
    </div>
);

const mapStateToProps = (state)=> {
    return {
        expenses: state.expenses ? ExpenseSelector(state.expenses,state.filters) : []
    }
}

export default connect(mapStateToProps)(ExpenseList);