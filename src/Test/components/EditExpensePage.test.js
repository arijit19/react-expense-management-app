import React from 'react';
import {shallow} from 'enzyme';

import {EditExpensePage} from '../../components/EditExpensePage.js'
import expenses from '../fixtures/Expense.js'

let wrapper, match, startEditExpenseSpy, startRemoveExpenseSpy, historySpy;

beforeEach(()=>{
     match = {
        params: {
            id: `:${expenses[0].id}`
        }
    }
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        match={match} 
        expense={expenses[0]} 
        startEditExpense={startEditExpenseSpy} 
        startRemoveExpense={startRemoveExpenseSpy} 
        history={historySpy}
        />);
})

test('Testing Editing Expences component render',()=>{
    
    expect(wrapper).toMatchSnapshot();
})

test('Testing Editing Expences component for editing items',()=>{
    const expense = {
        ...expenses[0],
        note: 'New Note',
    }
   wrapper.find('ExpenseForm').prop('onSubmit')(expense);
   expect(historySpy.push).toHaveBeenLastCalledWith('/');
   expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expense.id,expense);
})

test('Testing Editing Expences component for removing items', ()=>{
    wrapper.find('button').prop('onClick')();
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({id: expenses[0].id})
})