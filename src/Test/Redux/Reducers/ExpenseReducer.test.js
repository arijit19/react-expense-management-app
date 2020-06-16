import moment from 'moment';
import ExpenseReducer from '../../../Redux/Reducers/ExpenseReducer.js'
import expenses  from '../../fixtures/Expense.js'

test('Testing expense reducer default state',()=>{
    const res = ExpenseReducer(undefined,{type:'@@INIT'})
    expect(res).toEqual([])
})

test('Testing expense reducer by adding element',()=>{
    const action = {
        type:'ADD_EXPENSE',
        expense :  {
            id: '4',
            description: 'Music',
            note: '',
            amount: 250,
            createdAt: moment(0).add(5,'day').valueOf()
        }
    };

    const res = ExpenseReducer(expenses,action)
    const output = [...expenses,action.expense]
    
    expect(res).toEqual(output);
})

test('Testing expense reducer by removing element',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[2].id
    };

    const res = ExpenseReducer(expenses,action)
    const output = expenses.filter((expense) => expense.id !== expenses[2].id)
    expect(res).toEqual(output);
})

test('Testing expense reducer by fetching elements',()=>{
    const action = {
        type: 'FETCH_EXPENSE',
        expenses
    }
    const res = ExpenseReducer(expenses,action);
    expect(res).toEqual(expenses)
})

test('Testing expense reducer by removing element without a valid id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    };

    const res = ExpenseReducer(expenses,action)
    const output = expenses.filter((expense) => expense.id !== '-1')
    expect(res).toEqual(output);
})

test('Testing expense reducer by editing element',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        update: {
            amount: 800
        }
    };

    const res = ExpenseReducer(expenses,action)
    expenses[1] = {
        ...expenses[1],
        ...action.update
    }
    
    expect(res).toEqual(expenses);
})

test('Testing expense reducer by editing element without a valid id',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id: '-1',
        update: {
            amount: 800
        }
    };

    const res = ExpenseReducer(expenses,action)
    expect(res).toEqual(expenses);
})