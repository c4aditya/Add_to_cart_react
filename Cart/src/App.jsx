import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
function App(){
  return(
    <>
    <div>
    <Navbar/>
    </div>

    <div>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  
    
    </>
  )
}

export default App;