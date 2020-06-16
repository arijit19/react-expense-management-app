import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';

import getExpenseTotal from '../Redux/selectors/ExpenseTotal.js'

export const ExpensesSummary = (props)=> {
    const word = props.expensesCount <= 1 ? 'expense' : 'expenses'
    return(
    <div>
        <p>Viewing : {props.expensesCount} {word}. Total Expense: {numeral(props.expensesTotal).format('$0,0.00')} </p>
    </div>
)};

const mapStateToProps = (state)=> {
    console.log(state);
    
    return {
        expensesTotal : getExpenseTotal(state.expenses),
        expensesCount : state.expenses ? state.expenses.length : 0
    }
}

export default connect(mapStateToProps)(ExpensesSummary);