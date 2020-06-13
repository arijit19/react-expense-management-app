import React from 'react';
import {shallow} from 'enzyme'

import {ExpensesSummary} from '../../components/ExpensesSummary.js';
import expenses  from '../fixtures/Expense.js';
import getExpenseTotal from '../../Redux/selectors/ExpenseTotal.js'

test('Testing Expenses summary render component',()=>{
    const total = getExpenseTotal(expenses);
    const length = expenses.length;
    const wrapper = shallow(<ExpensesSummary expensesCount={length} expensesTotal={total}/>);
    expect(wrapper).toMatchSnapshot()
})