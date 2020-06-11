import React from 'react';
import moment from 'moment';
// import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';


// const now = moment();
// console.log(now.format('MMM Do, YYYY'));


class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state ={
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            note: props.expense  ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            dateFocused: false,
            error: ''
        }
    }

    

    handleDescriptionChange = (e)=> {
        const description = e.target.value;
        this.setState(()=> ({ description}));
    }

    handleAmountChange = (e)=> {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
            this.setState(()=> ({ amount}));
        }
        
    }

    handleNoteChange = (e)=> {
        const note = e.target.value;
        this.setState(()=> ({ note}));
    }

    handleDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(()=> ({createdAt}));
        }
    }

    handleDateFocusedChange = ({focused}) => {
        this.setState(()=>({dateFocused: focused}))
    }

    handleOnSubmit = (e)=> {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            const error = 'Please set the description and amount';
            this.setState(()=> ({error}))
        }
        else {
            const error = '';
            this.setState(()=> ({error}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                <p>Expense Form</p>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        type='text' 
                        placeholder='Description' value={this.state.description} 
                        onChange={this.handleDescriptionChange}
                        autoFocus
                    />

                    <input 
                        type='text' 
                        placeholder='Amount' value={this.state.amount} 
                        onChange={this.handleAmountChange}
                    />

                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.handleDateChange}
                        focused = {this.state.dateFocused}
                        onFocusChange  = {this.handleDateFocusedChange}
                        numberOfMonths = {1}
                        isOutsideRange = {()=> false}
                    />

                    <textarea 
                        placeholder='Add a note for your expense(optional)' 
                        value={this.state.note}
                        onChange={this.handleNoteChange}
                    />

                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;