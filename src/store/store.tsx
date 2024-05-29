import { configureStore } from "@reduxjs/toolkit";
import ProductReducer  from '../slices/ProductSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const Store = configureStore({
    reducer : {
        mainproduct : ProductReducer
    }
})

export type AppDispatch =  typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
