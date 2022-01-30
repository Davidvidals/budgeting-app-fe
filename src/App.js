import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//pages
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
import New from "./Pages/New.js"

//components
import Navbar from "./components/Navbar.js"



function App() {
  return (
    <div id="app">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path ='/' element= {<Home />} />
            <Route path ='/Transactions' element ={<Index />} />
            <Route path ='/Transactions/:index' element ={<Show />} />
            <Route path ='/Transactions/:index/edit' element ={<Edit />} />
            <Route path ='/Transactions/new' element ={<New />} />
          </Routes>
        </main>

      </Router>
    </div>
  );
}

export default App;
