import { useState, useEffect } from "react";
// import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

function Transactions(){
    const[Transactions,setTransactions]=useState([]);
    useEffect(()=>{
        
        fetch(API_URL + "/Transactions")
        .then((res)=>{
          return res.json();
        }).then((data)=>{
          setTransactions(data);
        }).catch((err)=> {
          throw err
        });
    }, []);
     return(
            <div className="Transactions">
                 {Transactions.map((transaction, amount) => {
              return <Transactions  transaction={transaction} amount={amount} />;
            })}
            </div>
        )
    }

        

export default Transactions;