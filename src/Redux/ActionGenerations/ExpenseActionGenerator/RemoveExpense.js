import { database } from "../../../firebase/firebase";

const RemoveExpense = ({id}={})=>(
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

export const startRemoveExpense = ({id}={}) => {
    return async function(dispatch) {
        await database.ref(`expenses/${id}`).remove();
        dispatch(RemoveExpense({id}))
    }
}

export default RemoveExpense;