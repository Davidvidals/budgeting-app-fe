import { useState, useEffect } from "react";
import Budget from './Transaction'
import axios from "axios";
import '../Css/Total.css'

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

function Transactions(){
    const[Transactions,setTransactions]= useState([]);
    useEffect(()=>{
         axios.get(`${API_URL}/Transactions`)
         .then((res)=>{
             setTransactions(res.data);
             console.log(res.data);
         }).catch((err)=>{
             throw err
         })
    }, []);
    
let total = Transactions.reduce((total,current)=> total = Number(total) + Number(current.amount) , 0)
console.log(total)



 
     return(
            <div className="Transactions">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>




                  <div className="total"><h2>Account Total = {total.toFixed(2)}</h2> </div>
                {Transactions.map((Transactions,index)=>{
                return <Budget  Transaction={Transactions} key={index} index={index} />;   
               })}
              
              
           
            </div>
        )
    }

        

export default Transactions;