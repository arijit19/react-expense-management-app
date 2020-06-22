import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

import getExpenseTotal from '../Redux/selectors/ExpenseTotal.js'

export const ExpensesSummary = (props)=> {
    const word = props.expensesCount <= 1 ? 'expense' : 'expenses'
    return(
    <div className='page-header'>
        <div className='content-container'>
            <h1 className='page-header__title'>Viewing : <span>{props.expensesCount}</span>  {word}. Total Expense: <span>{numeral(props.expensesTotal).format('$0,0.00')}</span> </h1>
            <div className='page-header__actions'>
                <Link to='/create' className='button'>Add Expense</Link>
            </div>
        </div>
    </div>
)};

const mapStateToProps = (state)=> {    
    return {
        expensesTotal : getExpenseTotal(state.expenses),
        expensesCount : state.expenses ? state.expenses.length : 0
    }
}

export default connect(mapStateToProps)(ExpensesSummary);