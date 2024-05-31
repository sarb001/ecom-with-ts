import { useEffect } from "react";
import { AllProductsSlice } from "../slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { AddinginCart, cartType } from "../slices/CartSlice";
import { ItemsinCart } from "../utils/ItemsinCart";


const Products = () => {

  const { loading , filterproducts} = useSelector((state : RootState) => state?.mainproduct)
  console.log('fil prod',filterproducts);

   const { cart } = useSelector((state : RootState) => state?.cart);
   const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      dispatch(AllProductsSlice());
  },[dispatch])

   if(loading) return <h2> Loading...... </h2>

   
   const addtocart = (product:cartType) => {
        const checkexists = ItemsinCart({cart,product});
        console.log('exists =',checkexists); 
        if(!checkexists) dispatch(AddinginCart(product));
    }

  return (
    <>
        <h3> Total Length is -{filterproducts?.length} </h3>
     <div style = {{display: "grid" , gridTemplateColumns:'1fr 1fr', gap : '5px',fontSize:'24px' }}>

            {filterproducts && filterproducts?.map(i => 
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
                       <button 
                        onClick={() => addtocart(i)}
                       style = {{padding:'3%',backgroundColor:'lightsalmon'}}> 
                       Add to Cart </button>
                    </div>
                  </div>
            )}
          
      </div>
    </>
  )
}

export default Products