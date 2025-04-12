import { useContext, useState } from "react";
import { ProductContaxt } from "../ContaxtAPI/ProductApi";

function Home(){
const { ProductData ,loading} = useContext( ProductContaxt)
// console.log(ProductData)

function changebutton(){
    setRemoveCart(true)
}
    return (
        <>
        <h1> This is home page </h1>
        <div className="top-card">
          {
            loading ?
            (<p>Loding products.. </p>) :
            (   
                ProductData.map((Product) => (
                    <div  key={Product.id}>
                   <div className="cards">

                    <div className="image">
                      <img src={Product.image}/>
                    </div>
                    <div className="heading">
                        <p>{Product.title}</p>
                    </div>

                    {/* <div className="discripction">
                        <p>{Product.description}</p>
                    </div> */}
                    <div className="rating">
                        <p>{Product.rating.rate}</p>
                    </div>

                    <div className="price">
                        <p>{Product.price}</p>
                    </div>

                    <button>
                        {
                            selected ? (<p>Remove Items</p>) : (<p>Add To cart</p>)
                        }
                    </button>
                    
                   </div>
                 
                   </div>
                  ))
                   
            )
            
           
          }
          </div>
        </>
    )
}

export default Home;