import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("");

    const handleYearChange = (year) => {
        console.log("In Expenses.js");
        console.log("Year: " + year);
        setFilteredYear(year);
    }

    const filteredExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} handleYearChange={handleYearChange} />
                <ExpensesList items={filteredExpense}/>
            </Card>
        </div>
    );
}

export default Expenses;