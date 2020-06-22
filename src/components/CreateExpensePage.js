import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {StartAddExpense} from '../Redux/Actions/ExpenseActions.js'

export class CreateExpense extends React.Component {
    onSubmit = (expense)=>{
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'> 
                        <h1>Add Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> ({
    startAddExpense: (expense)=> dispatch(StartAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(CreateExpense);