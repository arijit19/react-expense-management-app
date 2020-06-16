import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {database} from '../../../firebase/firebase.js'
import { StartAddExpense, AddExpense, RemoveExpense, 
    EditExpense, FetchExpense, StartFetchExpense, StartRemoveExpense, StartEditExpense} from '../../../Redux/Actions/ExpenseActions.js'
import expenses from '../../fixtures/Expense.js'

const createMockStore = configMockStore([thunk]);

beforeEach( async function(done){
    const expensesData = [];
    expenses.forEach(async function({id, description, note, amount, createdAt}){
            expensesData[id] = {description,note,amount,createdAt}
    });
    await database.ref('expenses').set(expensesData);
    done();
})

test('Testing to remove Expense item fron list',()=>{
    expect(RemoveExpense({id: '12345'})).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12345'
    });
});

test('Testing to remove Expense with async action', async function(done){
    const store = createMockStore({});
    await store.dispatch(StartRemoveExpense({id:1}));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 1
    });
    // await database.ref(`exp`)
    done()
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

test('Testing to edit Expense from firebase with async action', async function(done){
    const id =expenses[0].id;
    const update = { amount: 9};
    const store = createMockStore({});
    await store.dispatch(StartEditExpense(id,update));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        update
    })
    const snapshot = await database.ref(`expenses/${id}`).once('value');
    expect(snapshot.val().amount).toBe(update.amount)
    done()
});

test('Testing to add Expense item in to the list.(With a expense obj as argument)',()=>{
    expect(AddExpense(expenses[0])).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
});

test('Testing to add Expense call to database with async action', async function(done){
    const expense = {
        description: 'Game',
        note: '',
        amount: 1000,
        createdAt: 0
    }
    const store = createMockStore({});
    await store.dispatch(StartAddExpense(expense));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expense
        }
    })

    const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value');
    // console.log(snapshot.val());
    
    expect(snapshot.val()).toEqual(expense)

    done();
});

test('Testing to add Expense call to database with async action with default value', async function(done){
    const expense = {
        description : '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const store = createMockStore({});
    await store.dispatch(StartAddExpense());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expense
        }
    })

    const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value');
    // console.log(snapshot.val());
    
    expect(snapshot.val()).toEqual(expense)

    done();
});

test('Testing to fetch Expense call to database with data', (done)=>{
    const actions = FetchExpense(expenses);
    expect(actions).toEqual({
        type: 'FETCH_EXPENSE',
        expenses
    })
    done()
})

test('Testing to fetch Expense call to firebase database with async action', async function(done){
    const store = createMockStore({});
    await store.dispatch(StartFetchExpense())
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'FETCH_EXPENSE',
        expenses
    })
    done()
})


