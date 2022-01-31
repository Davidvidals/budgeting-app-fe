import '../Css/Total.css'
import { useState, useEffect } from "react";

function Total(){
    const[Transactions,setTransactions]= useState([]);
    let total = Transactions.reduce((total,current)=> total = Number(total) + Number(current.amount) , 0)
console.log(total)

if (total<1000){
    <h1 style ='color:red'>{total}</h1>
} else if (total>1000){
    <h1 style='color:green'>{total}</h1>
}
}

export default Total;