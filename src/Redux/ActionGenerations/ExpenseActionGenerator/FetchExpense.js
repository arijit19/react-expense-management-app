import {database} from '../../../firebase/firebase.js';

const FetchExpense = (expenses)=> ({
    type: 'FETCH_EXPENSE',
    expenses,
})

export default FetchExpense;

export const startFetchExpense = ()=>{
    return async function(dispatch) {
        const snapshot = await database.ref('expenses').once('value');
        // console.log(snapshot.val());
        const expenses = []
        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        dispatch(FetchExpense(expenses))
    }
}