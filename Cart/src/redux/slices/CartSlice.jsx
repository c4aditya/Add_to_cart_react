import {createSlice} from "@reduxjs/toolkit"
export const CartSlice  = createSlice({
// There are three thigs need for define the Redux 
// 1 - name of the slice 
  name :"cart",

//  inital state 
  
initialState:[],

// reducer means function that particualr slice perform 

reducers:{

    add :()=>{},
    remove:()=>{}
}
})


// exporting the function 

export const {add , remove} = CartSlice.actions;
export default CartSlice.reducer;