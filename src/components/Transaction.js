import {Link} from "react-router-dom"
import Transactions from "./Transactions"

function Budget({Transaction , index}){
    return (
        <div>
           {Transaction.item_name}

           <Link to ={`/Transactions/${index}`}>=</Link>
        </div>
    )
}

export default Budget;