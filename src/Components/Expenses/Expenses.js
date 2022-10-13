import './Expenses.css';

import Card from '../UI/Card';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';









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

        <ExpenseList filteredExpenses = {filteredExpenses}/>
            
        </Card >
    )
}


export default Expenses;