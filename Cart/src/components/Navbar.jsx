import { useNavigate } from "react-router";
 function Navbar(){
  const nevigate  = useNavigate();
  
 

    return(
   
        <div className="">
            <button className="btn-nav" onClick={()=>nevigate("/")} >Home</button>
            <button className="btn-nav" onClick={()=>nevigate("/cart")}>Cart</button>
        </div>


    )
}

export default Navbar;