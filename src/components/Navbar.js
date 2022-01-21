import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/Transactions">Transactions</Link>
      </h1>
      <button>
        <Link to="/Transactions/new">New Transactions</Link>
      </button>
    </nav>
  );
}

export default NavBar;