import {Link} from "react-router-dom"
import '../Css/Details.css'


function Budget({ amount, index}){
    return (
        <div>
          
            <table>
                <tr>
                    <td><Link to ={`/Transactions/${index}`}><h2>Transaction {index}</h2> </Link></td>
                </tr>
            </table>
           
        </div>
    )
}

export default Budget;