
import {database} from '../../../firebase/firebase.js';

const AddExpense = (expense)=>(
    {
        type: 'ADD_EXPENSE',
        expense
    }
);

export const startAddExpense = (expenseData={})=> {
    return async function(dispatch, getState) {
        const uid = getState().Auth.UID
        console.log(getState());
        const {
            description = '',
            note= '',
            amount= 0,
            createdAt =0
        } = expenseData;
    
        const expense = { description, note, amount,createdAt };
        const ref = await database.ref(`users/${uid}/expenses`).push(expense);
        
        dispatch(AddExpense({
            id: ref.key,
            ...expense
        }));
    }

}
export default AddExpense;