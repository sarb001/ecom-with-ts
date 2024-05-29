import { useEffect } from "react";
import { AllProductsSlice } from "../slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";


const Products = () => {

  const { loading ,error ,  AllProducts} = useSelector((state : RootState) => state?.mainproduct)
  console.log('load| erro|allprod=',AllProducts);

   const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
      dispatch(AllProductsSlice());
  },[dispatch])


  return (
    <>
     <h3> Product Section  </h3>
    </>
    // <>
    //     <h3> Total Length is -{AllProducts?.length} </h3>
    //  <div style = {{display: "grid" , gridTemplateColumns:'1fr 1fr', gap : '5px',fontSize:'24px' }}>
    //         {AllProducts?.map(i => 
    //               <div key = {i?.id} className='card' 
    //               style = {{backgroundColor:'lightgrey',padding:'2%',margin:'5% 1%' , width:'90%' , minHeight:'30vh'}}>
    //               <div> {i?.id} {i?.title} </div>
    //                 <div style = {{width:'60%' ,height:'30vh'}}> 
    //                   <img style = {{width:'45%' ,height:'29vh' ,objectFit:'contain'}} src = {i?.images[0]}  alt = {i?.title} />
    //                 </div> 
    //                 <div style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'9px'}}> 
    //                   <div> {i?.category} Only </div> 
    //                   <div> Price -  Rs.{i?.price.toFixed()} </div>
    //                   <div> Rating - {i?.rating.toFixed()} Star </div>
    //                   </div>
    //               </div>
    //         )}
          
    //   </div>
    // </>
  )
}

export default Products