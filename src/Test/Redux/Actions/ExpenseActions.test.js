import { render } from '@testing-library/react';
import {AddExpense, RemoveExpense, EditExpense} from '../../../Redux/Actions/ExpenseActions.js'

test('Testing to remove Expense item fron list',()=>{
    expect(RemoveExpense({id: '12345'})).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12345'
    });
});

test('Testing to edit of Expense item from list',()=>{
    expect(EditExpense  ('12345', {
        description: 'Rent',
        amount: 50
    })).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        update: {
            description: 'Rent',
            amount: 50
        }
    });
});

test('Testing to add Expense item in to the list.(With a expense obj as argument)',()=>{
    const expense = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    expect(AddExpense(expense)).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('Testing to add Expense item in to the list.(Without a expense obj as argument)',()=>{
    expect(AddExpense()).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

