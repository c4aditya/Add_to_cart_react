import { NavLink } from "react-router";

function Navbar(){
    return(
        <>
        <nav>
            <div className="navbar">
                <NavLink to="/">
                {/* <img src="" alt="image not found"/> */}
                </NavLink>

                <NavLink to="/"><p>Home</p></NavLink>
                 
                 <NavLink to="/cart"><p>Add to cart</p></NavLink>
                
            </div>
        </nav>
        </>
    )
}

export default Navbar;