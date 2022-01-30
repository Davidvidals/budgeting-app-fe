import { useState, useEffect } from "react";
import Budget from './Transaction'
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

function Transactions(){
    const[Transactions,setTransactions]= useState({});
    useEffect(()=>{
         axios.get(`${API_URL}/Transactions`)
         .then((res)=>{
             setTransactions(res.data);
             console.log(res.data);
         }).catch((err)=>{
             throw err
         })
    }, []);
    



     return(
            <div className="Transactions">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               {/* {Transactions.map((el)=> el.amount).reduce((acc,curr)=>{
                return <Number(acc) + Number (curr)/>
               )} */}
        {Transactions.map((el)=>el.amount).reduce((acc,curr)=>{
            return Number(acc) + Number(curr)
        })}

                {Transactions.map((Transactions,index)=>{
                return <Budget  Transaction={Transactions} key={index} index={index} />;   
               })}
              
              
           
            </div>
        )
    }

        

export default Transactions;