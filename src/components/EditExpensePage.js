import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from './ExpenseForm.js';
import {EditExpense, RemoveExpense, StartRemoveExpense, StartEditExpense} from '../Redux/Actions/ExpenseActions.js'


export class EditExpensePage extends React.Component {

    onSubmit = (expense)=> {
        // console.log(expense);
        
        this.props.startEditExpense(this.props.match.params.id.toString().slice(1),expense);
        this.props.history.push('/');
    };

    onClick = ()=> {
        this.props.startRemoveExpense({id: this.props.match.params.id.toString().slice(1)});
        this.props.history.push('/');
    }

    render() {
        
        return (
            <div>
                <h3>Editing expence with ID: {this.props.match.params.id.toString().slice(1)}</h3>
                <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit= {this.onSubmit}   
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id.toString().slice(1))
    };
  };

  const mapDispatchToProps = (dispatch)=> {
      return {
            startEditExpense: (id,expense)=> dispatch(StartEditExpense(id,expense)),
            startRemoveExpense: (data)=> dispatch(StartRemoveExpense(data))
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);