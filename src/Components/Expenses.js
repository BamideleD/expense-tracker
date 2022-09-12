import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';



function Expenses (props){
    
    return (
        <Card className='expenses '> 
            <ExpenseItem title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date} id = {props.items[0].id} />
            <ExpenseItem title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date} id = {props.items[1].id} />
            <ExpenseItem title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date} id = {props.items[2].id} />
            <ExpenseItem title = {props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date} id = {props.items[3].id} />
        </Card >
    )
}


export default Expenses;