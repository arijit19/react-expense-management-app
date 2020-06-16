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
                <p>This is add expense page</p>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=> ({
    startAddExpense: (expense)=> dispatch(StartAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(CreateExpense);