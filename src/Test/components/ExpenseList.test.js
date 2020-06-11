import React from 'react';
import {shallow} from 'enzyme'

import {ExpenseList} from '../../components/ExpenseList.js'
import expenses from '../fixtures/Expense.js';

test('Testing Expense list component with expense props', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
})

test('Testing Expense list component without expense props', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
})