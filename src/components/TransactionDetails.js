import {useState,useEffect} from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../Css/Details.css'

function TransactionDetails(){
const [Transactions, setTransactions] = useState([])
let { index } = useParams();
let navigate = useNavigate();

useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_URL}/${index}`)
  .then((res)=>{
    setTransactions(res.data);
    console.log(res.data);
  }).catch(()=>{
    navigate("/not-found")
  })
},[]);


const handleDelete =()=>{
  axios.delete(`${process.env.REACT_APP_API_URL}/${index}`)
  .then((res)=>{
    navigate('/Transactions');
  }).catch((err)=>{
    console.log(err)
  })
};
return(
    <div >
      <div id='detailsBody'>
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>From</th>
            <th>Category</th>
          </tr>
          <tr>
            <td>{Transactions.item_name}</td>
            <td>${Transactions.amount}</td>
            <td>{Transactions.date}</td>
            <td>{Transactions.from}</td>
            <td>{Transactions.category}</td>
          </tr>
        </table>
      </div>
        





        <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/Transactions`}>
          <p class='submit_wrapper'><input type='submit' value='Back!'/></p>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/Transactions/${index}/edit`}>
          <p class='submit_wrapper'><input type='submit' value='Edit!'/></p>
          </Link>
        </div>
        <div>
          {" "}
          <p class='submit_wrapper'><input type='submit' value='Delete!' onClick={handleDelete}/></p>        </div>
      </div>
    </div>
)
}

export default TransactionDetails;