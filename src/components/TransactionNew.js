import { useState } from "react";


function TransactionNew(){
const [Transaction,setTransactions ] = useState({
    item_name : "",
        amount: 0,
        date: "",
        from: "",
        category: ""
});
const handleTextChange= (event=>{
    setTransactions({...Transaction, [event.target.id]: event.target.value})
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
          value={Transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder=" "
          
        />
        <br/>
        <label>Amount:</label>
        <input
          id="amount"
          type="text"
          value={Transaction.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />
        <br/>
        <label>Date:</label>
        <input
          id="date"
          type="text"
          value={Transaction.date}
          placeholder="Date"
          onChange={handleTextChange}
        />
        <br/>
        <label>From:</label>
        <input
          id="from"
          type="text"
          name="from"
          value={Transaction.from}
          placeholder="From"
          onChange={handleTextChange}
        />
        <br/>
        <label>Category:</label>
        <input
          id="category"
          name=""
          value={Transaction.category}
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