import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Home from "./pages/Home.jsx"
    import Cart from "./pages/Cart.jsx"
    import Navbar from "./components/Navbar.jsx";
   
    import React from "react"

    
    function App() {
      return (
        <>
        <div>
         
          <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
          </Router>
          
        </div>  
        </>
       
      )
    }

    export default App;
