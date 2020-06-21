import { database } from "../../../firebase/firebase";

const RemoveExpense = ({id}={})=>(
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

export const startRemoveExpense = ({id}={}) => {
    return async function(dispatch, getState) {
        const uid = getState().Auth.UID;
        await database.ref(`users/${uid}/expenses/${id}`).remove();
        dispatch(RemoveExpense({id}))
    }
}

export default RemoveExpense;