import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function TransactionEdit(){
    let {index} = useParams();
    const [Transactions, setTransactions] = useState({
        item_name : "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    })

    const handleTextChange = (event)=>{
        setTransactions({...Transactions, [event.target.id]: event.target.value})
    }

    useEffect(()=>{},[]);
    
    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
        <label> Item Name:</label>
        <input
          id="item-name"
          value={Transactions.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder=" "
          
        />
        <br/>
        <label>Amount:</label>
        <input
          id="amount"
          type="text"
          value={Transactions.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />
        <br/>
        <label>Date:</label>
        <input
          id="date"
          type="text"
          value={Transactions.date}
          placeholder="Date"
          onChange={handleTextChange}
        />
        <br/>
        <label>From:</label>
        <input
          id="from"
          type="text"
          name="from"
          value={Transactions.from}
          placeholder="From"
          onChange={handleTextChange}
        />
        <br/>
        <label>Category:</label>
        <input
          id="category"
          name=""
          value={Transactions.category}
          onChange={handleTextChange}
          placeholder="category"
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/Transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
        </div>
    )
}

export default TransactionEdit