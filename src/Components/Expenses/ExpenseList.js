import React from "react";
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = (props) => {

    let expenseContent = <p className ="expenses-list__fallback"> NO EXPENSE FOUND </p>


    if (props.filteredExpenses.length > 0){
        expenseContent = props.filteredExpenses.map((ExpenseObj) => {
            return (<ExpenseItem className = 'expenses-list'
                        key = {ExpenseObj.id}
                        title = {ExpenseObj.title} 
                        amount = {ExpenseObj.amount} 
                        date = {ExpenseObj.date}    
                    />)
        })
    }


    return expenseContent

    
}

export default ExpenseList;