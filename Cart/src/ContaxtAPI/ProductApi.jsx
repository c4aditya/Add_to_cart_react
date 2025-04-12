    import { createContext, useEffect ,useState} from "react";
    import axios from 'axios'
    export const ProductContaxt =createContext()

    export default function ProductProvider ({children}){

    const [ProductData,setProductData] = useState([])
    const [loading ,setloding] =useState(false)
  

        async function product() {
            
            try{
                setloding(true)
                const responce = await axios("https://fakestoreapi.com/products");
                console.log(responce.data)
                setProductData(responce.data)           
        
            }
        
            catch(error){
                console.log(error)
                console.log("getting error while fetching the data ")    
            }

            setloding(false)
            
        }

        useEffect(()=>{
            product()
        },[])

        const value ={
           ProductData, 
           loading,
          

        }

    

    return(
        <ProductContaxt.Provider value={value}>
            {children}
        </ProductContaxt.Provider>
    )   

    

    }