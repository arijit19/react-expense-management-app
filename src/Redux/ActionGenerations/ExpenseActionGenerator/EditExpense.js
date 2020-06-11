const EditExpense = (id,update)=>(
    {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
);

export default EditExpense;