import React from 'react';
import {shallow} from 'enzyme';

import {CreateExpense} from '../../components/CreateExpensePage.js'
import expenses from '../fixtures/Expense.js'

let startAddExpenseSpy, historySpy, wrapper;

beforeEach(()=>{
    startAddExpenseSpy = jest.fn();
     historySpy = {push: jest.fn()}
     wrapper = shallow(<CreateExpense startAddExpense={startAddExpenseSpy} history={historySpy}/>);
});

test('Testing Adding Expences component render', ()=>{   
    expect(wrapper).toMatchSnapshot();
});

test('Testing Adding Expences component when form is submited', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
});