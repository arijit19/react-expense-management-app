import expenses  from '../../fixtures/Expense.js'
import getExpenseTotal from '../../../Redux/selectors/ExpenseTotal.js'

test('Test total expense selector with proper data', ()=>{
    const total = getExpenseTotal(expenses);
    expect(total).toBe(23500)
    
})

test('Test total expense selectorwith single element in array', ()=>{
    const data = [{
        id: '3',
        description: 'Internet',
        note: '',
        amount: 2500,
        createdAt: 0
    }]
    const total = getExpenseTotal(data);
    expect(total).toBe(data[0].amount);
    
})

test('Test total expense selector without parameter or empty array', ()=>{
    const total = getExpenseTotal([]);
    expect(total).toBe(0);
    
})