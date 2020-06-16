import { database } from "../../../firebase/firebase";

const EditExpense = (id,update)=>(
    {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
);

export const startEditExpense= (id,update)=>{
    return async function(dispatch) {
        await database.ref(`expenses/${id}`).update({
            ...update
        })
        dispatch(EditExpense(id,update));
    }
}
export default EditExpense;