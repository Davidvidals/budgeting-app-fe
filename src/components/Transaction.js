import {Link} from "react-router-dom"

function Transaction ({Transaction , index}){
    return (
        <div>
           {Transaction.item_name}

           <Link to ={`/Transactions/${index}`}>=</Link>
        </div>
    )
}