import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialState = {
     cart? : [] 
     quantity : number,
     Totalamount : number,
}

const initialState:initialState = {
    cart : [],
    quantity : 0,
    Totalamount : 0
}

const CartSlice = createSlice({
     name :'cart',
     initialState,
     reducers : {

     },
     extraReducers : (builder) =>  builder
     
})

export default CartSlice.reducer;