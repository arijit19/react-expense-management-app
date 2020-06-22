import React from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';

import ExpenseForm from './ExpenseForm.js';
import {StartRemoveExpense, StartEditExpense} from '../Redux/Actions/ExpenseActions.js'


export class EditExpensePage extends React.Component {
   
    onSubmit = (expense)=> {
        // console.log(expense);
        
        this.props.startEditExpense(this.props.match.params.id.toString().slice(1),expense);
        this.props.history.push('/');
    };

    onClick = ()=> {
        // console.log(this.props);
        
        this.props.startRemoveExpense({id: this.props.match.params.id.toString().slice(1)});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h3 className='page-header__title'>Editing expence</h3>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm 
                        expense = {this.props.expense}
                        onSubmit= {this.onSubmit}   
                    />
                    <button onClick={this.onClick} className='button button--secondary'>Remove Expense</button>
                </div>     
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id.toString().slice(1))
    }
  };

const mapDispatchToProps = (dispatch)=> {
    return {
        startEditExpense: (id,expense)=> dispatch(StartEditExpense(id,expense)),
        startRemoveExpense: (data)=> dispatch(StartRemoveExpense(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditExpensePage));