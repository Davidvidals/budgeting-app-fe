import { useState } from "react";
import Transactions from "./Transactions";

function TransactionNew(){
const [Transactions,setTransactions ] = useState({
    item_name : "",
        amount: 0,
        date: "",
        from: "",
        category: ""
});
const handleTextChange= (event=>{
    setTransactions({...Transactions, [event.target.id]: event.target.value})
})

const handleSubmit = (event) => {
    event.preventDefault();
}
  ;
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
        <textarea
          id="category"
          name=""
          value={Transactions.category}
          onChange={handleTextChange}
          placeholder="category"
        />
        <br />
        <input type="submit" />
      </form>
      </div>
  )
  }
export default TransactionNew