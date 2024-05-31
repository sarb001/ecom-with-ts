import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { RemovefromCart, cartType } from '../slices/CartSlice';

const Cart = () => {
   
  const { cart,quantity } = useSelector((state : RootState) => state?.cart);
  console.log('cart Data is=',cart);
  console.log('Quantity is=',quantity);

  const dispatch = useDispatch<AppDispatch>();


  const Removefromcart = (product:cartType) => {
      console.log('slected id-',product?.id);
      dispatch(RemovefromCart(product.id));
      
  } 

  return (
    <>
      <h2> Cart length is - {cart?.length} </h2>
      {cart?.map((i) => {
         return (
              <div key = {i?.id} className='card' 
                  style = {{backgroundColor:'lightgrey',padding:'2%',margin:'5% 1%' , width:'90%' , minHeight:'30vh'}}>
                  <div> {i?.id} {i?.title} </div>
                    <div style = {{width:'60%' ,height:'30vh'}}> 
                      <img style = {{width:'95%' ,height:'29vh' ,objectFit:'contain'}} src = {i?.images[0]}  alt = {i?.title} />
                    </div> 
                    <div style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'9px'}}> 
                      <div> {i?.category} Only </div> 
                      <div> Price -  Rs.{i?.price.toFixed()} </div>
                      <div> Rating - {i?.rating.toFixed()} Star </div>
                    </div>
                    <div>
                       <button onClick={() => Removefromcart(i)}
                       style = {{padding:'3%',backgroundColor:'lightskyblue'}}> 
                       Remove from Cart </button>
                    </div>
                  </div>
         
         )
      })}
    </>
  )
}

export default Cart