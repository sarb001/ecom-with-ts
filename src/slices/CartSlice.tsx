import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type cartType = {
    id : number,
    title : string,
    category : string,
    price : number,
    images : string,
    rating : number,
    productquantity : number,
}

export  type initialState = {
     cart : cartType[]
     productquantity : number,
     Totalamount : number,
     AddinginCart : (id: string,
        title : string,
        price : number,
        images : string,) => void,
     removefromItem : (id : string) => void
}

const initialState:initialState = {
    cart : [],
    productquantity :1,
    Totalamount : 0,
    AddinginCart : () => {},
    removefromItem : () => {},
}

const CartSlice = createSlice({
     name :'cart',
     initialState,
     reducers : {
        AddinginCart : (state,action:PayloadAction<cartType>) => {
                 console.log('product in slice is =');
                 const newdata = {
                     ...state.cart, 
                     ...action.payload,
                     productquantity : 1
                    }
                
                 state.cart?.push(newdata);
        },

        RemovefromCart : (state,action) => {
                state.cart = state.cart.filter(i => i?.id !== action.payload);
                state.productquantity = state.productquantity - 1;
        }
        
     },

})

export const { AddinginCart ,RemovefromCart } = CartSlice.actions;
export default CartSlice.reducer;