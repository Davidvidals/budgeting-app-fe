import {useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";

function TransactionDetails(){
const [Transactions] = useState([])
let {index} = useParams();

useEffect(()=>{},[])
    const handleDelete =()=>{};
return(
    <div>
        <h2> Name : {Transactions.item_name}</h2>
        <br/>
        <h2> Amount : {Transactions.amount}</h2>
        <br/>
        <h2>Date : {Transactions.date}</h2>
        <br/>
        <h2>From : {Transactions.from}</h2>
        <br/>
        <h2>Category : {Transactions.category}</h2>

        <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/Transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/Transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
)
}

export default TransactionDetails