import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useCallback, useState } from "react";


const ProductFilter = () => {
  
  const { loading , error ,  AllProducts} = useSelector((state : RootState) => state?.mainproduct);
  
  console.log('load| erro|allprod=',AllProducts);

  const AllCategory = AllProducts.map(i => i?.category);

  const Uniquecategory = Array.from(new Set(AllCategory));
  console.log('unique cat =',Uniquecategory);

  const AllPrices = AllProducts.map(i => i?.price.toFixed()); 
  console.log('allPrices =',AllPrices);        // 1-3000

  const AllRating = AllProducts.map(i => i?.rating.toFixed());
  console.log('AllRating =',AllRating);        // 3,4,5

  //  Price   - slide ------
  //  Rating  - checkbox[]

//  const inputchangehandler = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
//    setPrice(e.target.value);
//  },[Price]);

  const [pricevalue,setpricevalue] = useState(0);

  const handleselectionchange = (e:React.ChangeEvent<HTMLSelectElement>) => {
      const newval = e.target.value;
      console.log('newval =',newval);
  };

  return (
    <div>
         <h3> Filter By Category </h3>
      <div>
      {Uniquecategory?.map((i,index) => {
        return (
          <div key = {index}>
             <button style = {{margin:'3% 5%'}}> {i} </button> 
          </div>
        )
      })}
      </div>
      <h3> Filter by Price  </h3>
     
      <div>
         <select id = "price" onChange = {(e) => handleselectionchange(e)}>
           <option  value = "lowest">   Lowest to  Lowest   </option>
           <option  value = "highest">  Highest by Highest </option>
         </select>
      </div>

      <h3> Filter by Rating  </h3>
      <div>

      </div>
    </div>
  )
}

export default ProductFilter