import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

function Transactions(){
    const[Transactions,setTransactions]=useState([]);
    useEffect(()=>{
        axios.get(API_URL + "/Transactions")
      .then((res)=>{
        setTransactions(res.data);
      }).catch((err)=>{
        throw err;
      });
     });

     return(
            <div className="Transactions">
                 {Transactions.map((transaction, amount) => {
              return <Transactions  transaction={transaction} amount={amount} />;
            })}
            </div>
        )
    }

        

export default Transactions;