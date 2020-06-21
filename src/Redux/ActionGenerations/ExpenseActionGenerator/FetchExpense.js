import {database} from '../../../firebase/firebase.js';

const FetchExpense = (expenses)=> ({
    type: 'FETCH_EXPENSE',
    expenses,
})

export default FetchExpense;

export const startFetchExpense = ()=>{
    return async function(dispatch, getState) {
        const uid = getState().Auth.UID;
        // console.log(getState());
        const snapshot = await database.ref(`users/${uid}/expenses`).once('value');
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