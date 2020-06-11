import React from 'react';
import {shallow} from 'enzyme';

import ExpenseItem from '../../components/ExpenseItem.js'
import expenses from '../fixtures/Expense.js';

test('Test Expense item component', ()=>{
    const wrapper = shallow(<ExpenseItem key={expenses[0].id} {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})