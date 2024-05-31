import { cartType } from "../slices/CartSlice"


 export const ItemsinCart = ({cart,product}:any) => {
    console.log('cart items',cart);
        console.log('selected product-',product);
     return cart?.some((i:cartType) => i?.id === product.id)
  }

// export const ItemsinCart = ({filterproducts,product}:any) => {
//     console.log('all items-',filterproducts);
//     console.log('selected product-',product);
    
// }