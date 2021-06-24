import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("");

    const handleYearChange = (year) => {
        console.log("In Expenses.js");
        console.log("Year: " + year);
        setFilteredYear(year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter handleYearChange={handleYearChange} />
                {props.expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;