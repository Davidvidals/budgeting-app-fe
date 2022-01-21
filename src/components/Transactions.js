import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_APP

function Transactions(){
    const[Transactions,setTransactions]=useState([]);
    useEffect(()=>{
        fetch(API_URL + '/Transactions')
        .then((res)=>{
            return res.json();
        }).then ((data)=>{
            setTransactions(data);
        }).catch((err)=>{
            throw err
     });
    },[])

        return(
            <div className="Transactions">
                 {Transactions.map((transaction, amount, index) => {
              return <Transactions key={index} transaction={transaction} amount={amount} />;
            })}
            </div>
        )
}
export default Transactions;