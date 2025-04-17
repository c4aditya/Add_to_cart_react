import CartSlice from "./redux/slices/CartSlice";
import {configureStore} from "@reduxjs/toolkit";
export const store = configureStore({
    // here we definr reducer

    reducer:{
        // we listing the slicces 
        // name of the slice   and reducer name of the slice 

        cart : CartSlice
    }
})

