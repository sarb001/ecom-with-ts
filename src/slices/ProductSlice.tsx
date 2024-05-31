

import { createAsyncThunk, createSlice , PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

type MyProducts = {
    id :number,
    title : string,
    category : string,
    price : number,
    images : string,
    rating : number,
}

type myinitialState = {
    loading : boolean,
    error: string | null,
    AllProducts : MyProducts[],
    filterproducts : MyProducts[]
}

const initialState:myinitialState = {
    loading: false,
    error : null,
    AllProducts : [],
    filterproducts : []
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

         filtercheckbox : (state,action) => {
                    const { value , checked } = action.payload;
                    console.log('filtercheck =',{value,checked});

                    if(checked){        
                        state.filterproducts = [...state.AllProducts].filter(i =>
                            i?.rating.toFixed() === value
                        )
                    }else{
                        state.filterproducts = state.AllProducts;
                    }
                    console.log('filtercheckboc ==',state.filterproducts);
         },

          filterbycategory : (state,action) => {
             const  selectedcat  = action.payload;
             console.log('cat in slice =',selectedcat);
             state.filterproducts = [...state.AllProducts].filter(i => 
                i?.category === selectedcat                
             )
             console.log('cat= ',selectedcat);
          },

          filterbydropdown : (state,action) => {
              const pricerange = action.payload;
              console.log('pricerange=',pricerange);

                if(pricerange === 'lowest'){
                  state.filterproducts = [...state.AllProducts].sort((a,b) => {
                     return  a.price - b.price
                    })
                }else{
                    state.filterproducts = [...state.AllProducts].sort((a,b) => 
                        b.price - a.price
                    )
                }
                console.log('dropdown =',state.filterproducts);
          },

          ClearAll :(state) => {
             state.filterproducts = state.AllProducts;
          }

    },
    extraReducers : (builder) =>  builder
        .addCase(AllProductsSlice.pending   , (state) => {
                state.loading = true;
        })
        .addCase(AllProductsSlice.fulfilled , (state,action : PayloadAction<MyProducts[]>) => {
             state.loading = false;
             state.AllProducts = action.payload;
             state.filterproducts = action.payload;
        })
        .addCase(AllProductsSlice.rejected  , (state,action) => {
            state.loading = false;
            state.error = action.error?.message || null;
    })
})


export const { filterbycategory ,filtercheckbox ,filterbydropdown  , ClearAll } = ProductSlice.actions;
export default ProductSlice.reducer;