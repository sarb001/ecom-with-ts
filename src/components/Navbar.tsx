
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { RootState } from "../store/store";

const Navbar = () => {

   const { productquantity ,cart } =  useSelector((state : RootState) => state?.cart);
   console.log('Quatity =',productquantity);
   console.log('cart is =',cart);
   
   const TotalQuantity = cart?.reduce((a,c) => 
    {
         const check1 = a;
         console.log('check1 =',check1);
         const check2 = c.productquantity;
         console.log('check2 =',check2);
         const res = check1 + check2;
         console.log('res is=',res);
         return  res;
    },0)
   console.log('  =',TotalQuantity);

  return (
    <div style = {{display:'grid' , gridTemplateColumns:'1fr 1fr',justifyContent:'space-between' , padding:'2%' ,backgroundColor:'lightgrey'}}>
    
      <div>
         <div> <Link to = "/"> Ecommerce </Link>  </div>
      </div>

      <div style = {{display:'flex',justifyContent:'space-between'}}> 
          <div>  <Link to ="/cart"> Cart {TotalQuantity} </Link>  </div>
          <div>  <Link to ="/shop"> Shop  </Link>   </div>
          <div>  <Link to ="/profile"> Profile </Link>   </div>
      </div>

    </div>
  )
}

export default Navbar