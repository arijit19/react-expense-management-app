import moment from 'moment';
import ExpenseSelector from '../../../Redux/selectors/ExpenseSelector.js'
import expenses  from '../../fixtures/Expense.js'


test('Testing filter by text value',()=>{
    const filters = {
        startDate: undefined,
        endDate: undefined,
        text: 'Rent',
        sortBy: 'date'
    };

    const res = ExpenseSelector(expenses,filters);
    expect(res).toEqual([expenses[0]])
})

test('Testing filter by sorting items by amount',()=>{
    const filters = {
        startDate: undefined,
        endDate: undefined,
        text: '',
        sortBy: 'amount'
    };
    const res = ExpenseSelector(expenses,filters);
    expect(res).toEqual([expenses[0],expenses[2],expenses[1]])
})



test('Testing filter by sorting items by date',()=>{
    const filters = {
        startDate: undefined,
        endDate: undefined,
        text: '',
        sortBy: 'date'
    };

    const res = ExpenseSelector(expenses,filters);
    expect(res).toEqual([expenses[2],expenses[0],expenses[1]])
})

test('Testing filter by setting start date',()=>{
    const filters = {
        startDate: moment(0),
        endDate: undefined,
        text: '',
        sortBy: 'date'
    };

    const res = ExpenseSelector(expenses,filters);
    expect(res).toEqual([expenses[2],expenses[0]]);
})

test('Testing filter by setting end date',()=>{
    const filters = {
        startDate: undefined,
        endDate: moment(0),
        text: '',
        sortBy: 'date'
    };

    const res = ExpenseSelector(expenses,filters);
    expect(res).toEqual([expenses[0],expenses[1]]);
})


