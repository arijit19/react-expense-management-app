import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from './ExpenseForm.js';
import {EditExpense, RemoveExpense} from '../Redux/Actions/ExpenseActions.js'


export class EditExpensePage extends React.Component {

    onSubmit = (expense)=> {
        console.log(expense);
        
        this.props.editExpense(this.props.match.params.id.toString().slice(1),expense);
        this.props.history.push('/');
    };

    onClick = ()=> {
        this.props.removeExpense({id: this.props.match.params.id.toString().slice(1)});
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
          editExpense: (id,expense)=> dispatch(EditExpense(id,expense)),
          removeExpense: (data)=> dispatch(RemoveExpense(data))
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);