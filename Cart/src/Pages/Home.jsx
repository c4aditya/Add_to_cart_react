import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
function Home (){
    const API_URL ="https://fakestoreapi.com/products";
    const [loading ,setLoading] = useState(false);
    const [post,setPost] = useState([])
   async function fetchData(){

    try{
        // creating a loading unlti the data from the API 
         setLoading(true)       
          const responce = await axios(API_URL)
          console.log(responce.data)
          setPost(responce.data)
      

      }

      catch(error){
         console.log("Getting error while fetching the data")
         setPost([])
      }     
    setLoading(false)
   }

   useEffect(()=>{
    fetchData()
  },[])

    return(
        <>
        {
            loading ? <p>Loding data...</p>  :
             // if post lenght > 0 then () else ()
             post.length > 0 ?
             ( <div>
                {
               post.map( (post) => (
                
                  <Product key={post.id} post={post} />
               )  )           
                }
               </div>
               ) :

               (
                <div>
                    <h1>Not Data Found</h1>
                </div>
               )
        }
        </>
    )
}

export default Home;