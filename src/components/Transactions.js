import { useState, useEffect } from "react";
import Budget from './Transaction'
// import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Transactions(){
    const[transactions,setTransactions]=useState([]);
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
                 {transactions.map((Transaction, index) => {
              return <Budget Transaction={Transaction} index={index} />;
            })}
            </div>
        )
    }

        

export default Transactions;