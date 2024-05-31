import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CardUI from './CardUI';

const Cart = () => {
   
  const { cart } = useSelector((state : RootState) => state?.cart);
  console.log('cart Data is=',cart);

  return (
    <>
      <h2> Cart length is - {cart?.length} </h2>
      {cart?.map((i) => {
         return (
           <CardUI  product = {i} key = {i?.id} />
        )
    })}
          
    </>
  )
}

export default Cart