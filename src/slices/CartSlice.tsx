import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type cartType = {
    id : number,
    title : string,
    category : string,
    price : number,
    images : string,
    rating : number,
}

export  type initialState = {
     cart : cartType[] 
     quantity : number,
     Totalamount : number,
     AddinginCart : (id: string,
        title : string,
        price : number,
        images : string,) => void,
     removefromItem : (id : string) => void
}

const initialState:initialState = {
    cart : [],
    quantity : 0,
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
                 state.cart?.push(action.payload);
                 state.quantity = state.quantity + 1;
        },

        RemovefromCart : (state,action) => {
                state.cart = state.cart.filter(i => i?.id !== action.payload);
                state.quantity = state.quantity - 1;
        }
        
     },

})

export const { AddinginCart ,RemovefromCart } = CartSlice.actions;
export default CartSlice.reducer;