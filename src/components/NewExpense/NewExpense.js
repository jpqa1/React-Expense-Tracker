import React, { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const addExpenseHandler = () => {
        setIsEditing(true);
    }

    const cancelEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {(isEditing === false) && <button type="button" onClick={addExpenseHandler}>Add a new Expense</button>}
            {(isEditing === true) && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelEditingHandler={cancelEditingHandler} />}
        </div>
    );

}

export default NewExpense;