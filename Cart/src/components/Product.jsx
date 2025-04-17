import { useDispatch } from "react-redux";
import { add } from "../redux/slices/CartSlice";
function Product({post}){

 const disptach = useDispatch()
 function addToCart(){

 disptach(add(post))

 console.log("the items is added ")
 }
    return(
        <>
        <p>{post.title}</p>
        <img src={post.image}/>
        <p>{post.price}</p>
        <button onClick={addToCart}>Add to cart</button>
        </>
    )
}

export default Product;