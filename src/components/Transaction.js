import {Link} from "react-router-dom"


function Budget({Transactions , index}){
    return (
        <div>
          

           <Link to ={`/Transactions/${index}`}> ---GO</Link>
        </div>
    )
}

export default Budget;