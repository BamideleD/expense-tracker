import React, {useState} from "react";
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';


const NewExpenses = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const SaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() 
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
    const stopEditingHandler = () => {
    setIsEditing(false);
    };
    
    

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (           
                <ExpenseForm 
                    onSaveExpenseData = {SaveExpenseData}
                    onCancel={stopEditingHandler} 
                />
            )}
        </div>
    )
}



export default NewExpenses;