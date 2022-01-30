import { useState } from "react";
import '../Css/newTransaction.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function TransactionNew(){
const [Transaction,setTransactions ] = useState({
        item_name : " ",
        amount: 0,
        date: " ",
        from: " ",
        category: " "
});
const navigate = useNavigate();
const handleTextChange= (event=>{
    setTransactions({...Transaction, [event.target.id]: event.target.value})
})

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/Transactions`, Transaction)
    .then((res)=>{
      navigate('/Transactions')
    }).catch((err)=>{
      console.log(err)
    })
}
  ;
  return(
      <div>
        <section id='newTransaction'>
          <div className="newInfo"><h1>NEW TRANSACTION</h1></div>
          <article>
            <p>Please fill out the form below to create a new transaction!</p>
            <label for='checknew' className="newbutton"><div className="transaction"></div></label><input id='checknew' type='checkbox'/>

            <form onSubmit={handleSubmit} action='' className="newForm">
              <p class="input_wrapper"><input type="text" name="item_name" value={Transaction.item_name}  id ="item_name" onChange={handleTextChange}/><label for="item_name">Item</label></p>
              <p class="input_wrapper"><input type="text" name="amount" value={Transaction.amount}  id ="amount" onChange={handleTextChange}/><label for="amount">Amount</label></p>
              <p class="input_wrapper"><input type="text" name="date" value={Transaction.date}  id ="date" onChange={handleTextChange}/><label for="date">Date</label></p>
              <p class="input_wrapper"><input type='text' name="from" value={Transaction.from} id='from' onChange={handleTextChange}/><label for='from'>From</label></p>
              <p class="input_wrapper"><input type='text' name="category" value={Transaction.category} id='category' onChange={handleTextChange}/><label for='category'>Category</label></p>
              <p class="submit_wrapper"><input type="submit" value="Submit"  /></p>			 
            </form> 
          </article>        
        </section>

      </div>
  )
  }
export default TransactionNew