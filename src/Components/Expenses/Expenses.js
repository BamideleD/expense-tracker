import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';




const Expenses = (props) => {
    const [filteredYear, setFilteredYear]= useState('2020')

    const filteredChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    


    return (
        <Card className='expenses'> 
            <ExpensesFilter selected = {filteredYear} onChangeFilter = {filteredChangeHandler} />
            {filteredExpenses.map((ExpenseObj) => {
                return (<ExpenseItem 
                            key = {ExpenseObj.id}
                            title = {ExpenseObj.title} 
                            amount = {ExpenseObj.amount} 
                            date = {ExpenseObj.date}    
                        />)
            })}
        </Card >
    )
}


export default Expenses;