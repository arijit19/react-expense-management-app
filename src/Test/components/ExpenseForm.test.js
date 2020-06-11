import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

import ExpenseForm from '../../components/ExpenseForm.js';
import expenses from '../fixtures/Expense.js';

test('Testing Expense form page component', ()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expense form page component with data', ()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expense form page component for error handling', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=>{}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expense form page component for change in description', ()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change',{
        target : {
            value: 'Ninja'
        }
    });

    expect(wrapper.state('description')).toBe('Ninja');
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expense form page component for change in amount', ()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change',{
        target : {
            value: '500'
        }
    });

    expect(wrapper.state('amount')).toBe('500');
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expense form page component for change in amount with invalid data', ()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change',{
        target : {
            value: '.40'
        }
    });

    expect(wrapper.state('amount')).toBe('20000');
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expense form page component for change in note', ()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change',{
        target : {
            value: 'New Rent Value'
        }
    });

    expect(wrapper.state('note')).toBe('New Rent Value');
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expense form page component for form submit',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('Testing Expense form page component SingleDatePicker for change in createdAt value', ()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('Testing Expense form page component SingleDatePicker for change in focused value', ()=>{
    const focus = {
        "focused": true
    }

    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')(focus);
    expect(wrapper.state('dateFocused')).toEqual(true);
})