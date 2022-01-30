import { Link } from "react-router-dom";
import "../Css/Navbar.css"

function NavBar() {
  return (
    <nav>
      <ul >

        <li >
          <h1>
            <Link to='/'><img src ="https://www.arborbrothers.org/wp-content/uploads/2018/10/Pursuit-Logo.jpg" height={65} width={70}/></Link>
          </h1>
        </li>

        <li >
          <h1>
            <Link to="/Transactions">Transactions</Link>
          </h1>
        </li>

        <li >
          <h1>
            <Link to="/Transactions/new">New Transactions</Link>
          </h1>
        </li>

      </ul>
      
      
      
    </nav>
  );
}

export default NavBar;