import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../Css/Edit.css'


function TransactionEdit(){
    let {index} = useParams();
    const [Transactions, setTransactions] = useState({
        item_name : " ",
        amount: 0,
        date: " ",
        from: " ",
        category: " "
    })
    const navigate = useNavigate();

    const handleTextChange = (event)=>{
        setTransactions({...Transactions, [event.target.id]: event.target.value})
    }

    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/Transactions/${index}`)
      .then((res)=>{
        setTransactions(res.data);
      }).catch((err)=>{
        navigate('/not-found')
      })
    },[index]);
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/Transactions/${index}`, Transactions)
        .then((res)=>{
          navigate('/Transactions');
        }).catch((err)=>{
          console.log(err)
        })
    }
    return(
        <div>
        <section id='newTransaction'>
          <div className="newInfo"><h1>EDIT TRANSACTION</h1></div>
          <article>
            <p>Please edit a Transaction below!</p>
            <label for='checknew' className="newbutton"><div className="transaction"></div></label><input id='checknew' type='checkbox'/>

            <form onSubmit={handleSubmit} action='' className="newForm">
              <p class="input_wrapper"><input type="text" name="item_name" value={Transactions.item_name}  id ="item_name" onChange={handleTextChange}/><label for="item_name">Item</label></p>
              <p class="input_wrapper"><input type="text" name="amount" value={Transactions.amount}  id ="amount" onChange={handleTextChange}/><label for="amount">Amount</label></p>
              <p class="input_wrapper"><input type="text" name="date" value={Transactions.date}  id ="date" onChange={handleTextChange}/><label for="date">Date</label></p>
              <p class="input_wrapper"><input type='text' name="from" value={Transactions.from} id='from' onChange={handleTextChange}/><label for='from'>From</label></p>
              <p class="input_wrapper"><input type='text' name="category" value={Transactions.category} id='category' onChange={handleTextChange}/><label for='category'>Category</label></p>
              <p class="submit_wrapper"><input type="submit" value="Submit"  /></p>	
                    <Link to={`/Transactions/${index}`}>
                      <p class='submit_wrapper'><input type='submit' value='Nevermind!'/></p>
                    </Link>

            </form> 
          </article>        
        </section>



        </div>
    )
}

export default TransactionEdit