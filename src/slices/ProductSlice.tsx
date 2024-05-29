

import { createAsyncThunk, createSlice , PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

type MyProducts = {
    id :number,
    title : string,
    category : string,
    price : number,
    images : "",
    rating : number,
}

type myinitialState = {
    loading : boolean,
    error: string | null,
    AllProducts : MyProducts[]
}

const initialState:myinitialState = {
    loading: false,
    error : null,
    AllProducts : []
}


export const AllProductsSlice = createAsyncThunk('/' , async() => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            console.log('res is  =',res.data.products);
            return res.data.products;
        } catch (error) {
            console.log('error all product =',error);
        }
})

const ProductSlice = createSlice({
    name : 'products',
    initialState,
    reducers:{

    },
    extraReducers : (builder) =>  builder
        .addCase(AllProductsSlice.pending   , (state) => {
                state.loading = true;
        })
        .addCase(AllProductsSlice.fulfilled , (state,action : PayloadAction<MyProducts[]>) => {
             state.loading = false;
             state.AllProducts = action.payload;
        })
        .addCase(AllProductsSlice.rejected  , (state,action) => {
            state.loading = false;
            state.error = action.error?.message || null;
        })
})


export default ProductSlice.reducer;