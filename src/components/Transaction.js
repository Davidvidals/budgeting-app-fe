import {Link} from "react-router-dom"
import '../Css/Details.css'


function Budget({  index,Transaction }){
    return (
        <div>
          
            <table>
                <tr>
                    <th>Item Name</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td><Link to ={`/Transactions/${index}`}><h2>{Transaction.item_name}</h2></Link></td>
                    <td><h2>${Transaction.amount}</h2></td>
                </tr>

            </table>
           
        </div>
    )
}

export default Budget;