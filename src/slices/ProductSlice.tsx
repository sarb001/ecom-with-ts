

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

          filterbycheckbox1: (state,action) => {
             const { val1 , checkboxvalue } = action.payload;
             console.log('val in slice =',val1);
             console.log('checkbox in slice =',checkboxvalue);      

                    // if checkbox is true |  value = '3'| '4' | '5'

                if(checkboxvalue && val1 === '3'){
                 state.filterproducts = [...state.AllProducts].filter(i => 
                    i?.rating.toFixed() === val1
                 );
                 console.log(' checkbox 1 =',state.filterproducts);
                }else{
                    state.filterproducts = state.AllProducts;
                }
          },

          filterbycheckbox2:(state,action) => {
            const { val2 , checkboxvalue2 } = action.payload;
            if(checkboxvalue2 && val2 === '4'){
                state.filterproducts = [...state.AllProducts].filter(i => 
                   i?.rating.toFixed() === val2
                );
                console.log(' checkbox 2 =',state.filterproducts);
               }else{
                   state.filterproducts = state.AllProducts;
               }
          },

          filterbycheckbox3:(state,action) => {
            const { val3 , checkbox3 } = action.payload;
            if(checkbox3 && val3 === '5'){
                state.filterproducts = [...state.AllProducts].filter(i => 
                   i?.rating.toFixed() === val3
                );
                console.log(' checkbox 3=',state.filterproducts);
               }else{
                   state.filterproducts = state.AllProducts;
               }
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


export const { filterbycheckbox1 ,filterbycategory ,filtercheckbox ,filterbydropdown ,filterbycheckbox2 ,filterbycheckbox3 ,ClearAll } = ProductSlice.actions;
export default ProductSlice.reducer;