import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';

import {SetTextFilter, SortByAmount, SortByDate, SetStartDate, SetEndDate} from '../Redux/Actions/FilterActions.js'

export class ExpenseFilters extends React.Component {

    state = {
        dateFocused: null
    }

    handleDateChange= ({startDate, endDate})=> {
        this.props.setStartDate({startDate});
        this.props.setEndDate({endDate});
    }

    handleDateFocusedChange = (dateFocused)=> {
        this.setState(()=> ({dateFocused}));
    }

    handleTextFilterChange = (e)=>{
        // console.log(e);
        
        this.props.setTextFilter(e.target.value);
    }

    handleSortByFilter = (e)=> {
        if(e.target.value === 'date'){
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    }

    render() {
        return (
            <div>
                <input type='text' 
                    value={this.props.filters.text} 
                    onChange={this.handleTextFilterChange}
                    />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.handleSortByFilter}
                    >
                    <option value ='date'>Date</option>
                    <option value ='amount'>Amount</option>
                </select>
        
                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    focusedInput = {this.state.dateFocused}
                    onDatesChange = {this.handleDateChange}
                    onFocusChange = {this.handleDateFocusedChange}
                    numberOfMonths = {1}
                    isOutsideRange = {()=> false}
                    showClearDates= {true}
                    startDateId={'start'}
                    endDateId={'end'}
                />
        
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (data)=> dispatch(SetStartDate(data)),
        setEndDate: (data)=> dispatch(SetEndDate(data)),
        setTextFilter: (data)=> dispatch(SetTextFilter(data)),
        sortByDate: ()=> dispatch(SortByDate()),
        sortByAmount: ()=> dispatch(SortByAmount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFilters);