import { useState, useEffect } from "react";
import Budget from './Transaction'
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

function Transactions(){
    const[Transactions,setTransactions]= useState([]);
    useEffect(()=>{
         axios.get(API_URL)
         .then((res)=>{
             setTransactions(res.data);
             console.log(res.data)
         }).catch((err)=>{
             throw err
         })
    }, []);
     return(
            <div className="Transactions">
               {Transactions.map((Transactions,index)=>{
                return <Budget  budget={Transactions} key={index}/>;   
               })}
              
           
            </div>
        )
    }

        

export default Transactions;