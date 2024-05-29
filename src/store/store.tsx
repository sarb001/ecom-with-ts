import { configureStore } from "@reduxjs/toolkit";
import ProductReducer  from '../slices/ProductSlice';

export const Store = configureStore({
    reducer : {
        mainprod : ProductReducer
    }
})