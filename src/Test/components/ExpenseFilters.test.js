import React from 'react';
import {shallow} from 'enzyme';
import {DateRangePicker} from 'react-dates'; 
import moment from 'moment';

import {ExpenseFilters} from '../../components/ExpenseFilters.js';
import {defaultfilters, textfilters, sortByAmountfilters, startEndDatefilters } from '../fixtures/Filters.js'


let wrapper, setStartDateSpy, setEndDateSpy, 
setTextFilterSpy ,sortByDateSpy,sortByAmountSpy, event;


beforeEach(()=>{
    setStartDateSpy = jest.fn();
    setEndDateSpy= jest.fn();
    setTextFilterSpy= jest.fn();
    sortByAmountSpy = jest.fn();
    sortByDateSpy = jest.fn();

    event = {
        target: {
            value: textfilters.text
        }
    }

    wrapper = shallow(<ExpenseFilters 
                    setEndDate={setEndDateSpy}
                    setStartDate={setStartDateSpy}
                    setTextFilter={setTextFilterSpy}
                    sortByAmount= {sortByAmountSpy}
                    sortByDate = {sortByDateSpy}
                    filters={defaultfilters}
                    e = {event}
                    />)
})

test('Testing Expences Filter component render',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expences Filter component render text value ',()=>{

    wrapper.setProps({
        filters: textfilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expences Filter component render sortby-amount',()=>{

    wrapper.setProps({
        filters: sortByAmountfilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expences Filter component render filter by start and end date',()=>{

    wrapper.setProps({
        filters: startEndDatefilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expences Filter component for change in text filter',()=>{
    wrapper.find('input').prop('onChange')({
        target: {
            value: textfilters.text
        }
    })
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(textfilters.text);
})

test('Testing Expences Filter component for sorting items by amount',()=>{
    wrapper.find('select').prop('onChange')({
        target: {
            value: sortByAmountfilters.sortBy
        }
    })
    expect(sortByAmountSpy).toHaveBeenLastCalledWith();
})

test('Testing Expences Filter component for sorting items by date',()=>{
    wrapper.find('select').prop('onChange')({
        target: {
            value: defaultfilters.sortBy
        }
    })
    expect(sortByDateSpy).toHaveBeenLastCalledWith();
})

test('Testing Expences Filter component for sorting items by start date',()=> {
    const dates = {
        startDate: startEndDatefilters.startDate,
        endDate: undefined
    };
    wrapper.find(DateRangePicker).prop('onDatesChange')(dates)
    expect(setStartDateSpy).toHaveBeenLastCalledWith(dates);
})

test('Testing Expences Filter component for sorting items by end date',()=> {
    const dates = {
        startDate: undefined,
        endDate: startEndDatefilters.endDate
    };
    wrapper.find(DateRangePicker).prop('onDatesChange')(dates)
    expect(setEndDateSpy).toHaveBeenLastCalledWith(dates);
})