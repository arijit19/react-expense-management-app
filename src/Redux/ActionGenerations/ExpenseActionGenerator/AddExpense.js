import { v4 as uuidv4 } from 'uuid';
import {database} from '../../../firebase/firebase.js'
const AddExpense = (expense)=>(
    {
        type: 'ADD_EXPENSE',
        expense
    }
);

export const startAddExpense = (expenseData={})=> {
    return async function(dispatch) {
        const {
            description = '',
            note= '',
            amount= 0,
            createdAt =0
        } = expenseData;
    
        const expense = { description, note, amount,createdAt };
        const ref = await database.ref('expenses').push(expense);
        // console.log({
        //     id: ref.key,
        //     ...expense
        // });
        
        dispatch(AddExpense({
            id: ref.key,
            ...expense
        }));
    }

}
export default AddExpense;