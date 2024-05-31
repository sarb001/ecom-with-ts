import { configureStore } from "@reduxjs/toolkit";
import ProductReducer  from '../slices/ProductSlice';
import CartReducer from '../slices/CartSlice';

export const Store = configureStore({
    reducer : {
        mainproduct : ProductReducer,
        cart : CartReducer
    }
})

export type AppDispatch =  typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
