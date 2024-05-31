import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useCallback, useState } from "react";
import { ClearAll, filterbycategory, filterbycheckbox1, filterbycheckbox2, filterbycheckbox3, filterbydropdown, filtercheckbox } from "../slices/ProductSlice";


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

  const [starcheckbox1,setstarcheckbox1] = useState<boolean>(false);
  const [starcheckbox2,setstarcheckbox2] = useState<boolean>(false);
  const [starcheckbox3,setstarcheckbox3] = useState<boolean>(false);

  const dispatch  = useDispatch<AppDispatch>();

  // const Checkbox1changehandler = (e:React.ChangeEvent<HTMLInputElement>) => {
  //    const val1  = e.target.value;
  //    const checkboxvalue = !starcheckbox1;
  //    console.log('cehckboxv =',checkboxvalue);
  //    console.log('newval =',val1);
  //    setstarcheckbox1(!starcheckbox1);
  //    dispatch(filterbycheckbox1({val1,checkboxvalue}));
  // }

  // const Checkbox2changehandler = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   const val2  = e.target.value;
  //   const checkboxvalue2 = !starcheckbox2;
  //   console.log('cehckboxv =',checkboxvalue2);
  //   console.log('newval =',val2);
  //    setstarcheckbox2(!starcheckbox2);
  //    dispatch(filterbycheckbox2({val2,checkboxvalue2}));
  // }

  // const Checkbox3changehandler = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   const val3  = e.target.value;
  //   const checkbox3 = !starcheckbox3;
  //   console.log('checkbox2 =',checkbox3);
  //   console.log('newval =',val3);
  //    setstarcheckbox3(!starcheckbox3);
  //    dispatch(filterbycheckbox3({val3,checkbox3}));
  // }

   const [checkboxstate,setcheckboxstate] = useState({
       starcheckbox1 : false,
       starcheckbox2 : false,
       starcheckbox3 : false,
   });

   const checkboxhandler = (e:React.ChangeEvent<HTMLInputElement>) => {
          const { id , value ,checked } = e.target;
          console.log('checked==',{ id , value ,checked });   // checked is boolean true | false

        // id - starcheckbox1  || startcheckbox2
        // value = '3'

        setcheckboxstate(prev =>  ({
          ...prev,
          [id] :checked
        }))
         dispatch(filtercheckbox({value,checked}));
   }

  const handlecategory = (i:string) => {
      const selectedcat = i;
      console.log('newval =',selectedcat);
      dispatch(filterbycategory(selectedcat))
  }

  const handleselectionchange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const pricerange = e.target.value;
    console.log('newval =',pricerange);
    dispatch(filterbydropdown(pricerange))
  };

  const clearAllFilters = () => {
    console.log('clicked clear ');
       dispatch(ClearAll());
  }

  return (
    <div>
         <h3> Filter By Category </h3>
      <div>
      {Uniquecategory?.map((i,index) => {
        return (
          <div key = {index}>
             <button  onClick={() => handlecategory(i)} style = {{margin:'3% 5%'}}> {i} </button> 
          </div>
        )
      })}
      </div>

      <h3> Filter by Price  </h3>
     
      <div>
         <select id = "price" onChange = {(e) => handleselectionchange(e)}>
           <option  value = "lowest">   Lowest  to  Highest     </option>
           <option  value = "highest">  Highest to Lowest </option>
         </select>
      </div>

      {/* <h3> Filter by Rating  </h3>
      <div>

         <div>
          <input type = "checkbox"   id = "3star"  value = "3" 
          checked = {starcheckbox1}
          onChange={(e) => Checkbox1changehandler(e)} />
          <label> Less then  3 Stars </label>
         </div>

         <div> 
          <input type = "checkbox"  id = "4star"   value = "4"  
           checked = {starcheckbox2}
           onChange={(e) => Checkbox2changehandler(e)} />
          <label> 4 Stars </label>
         </div>

         <div>
          <input type = "checkbox"  id = "5star"   value = "5"  
           checked = {starcheckbox3}
          onChange={(e) => Checkbox3changehandler(e)} />
          <label> 5 Star </label>
         </div>
         
      </div> */}


         <h3> Filter by Rating  </h3>
      <div>

         <div>
            <input type = "checkbox"   
            id = "starcheckbox1"  value = "3" 
            checked = {checkboxstate.starcheckbox1}
            onChange={checkboxhandler} />
            <label> Less then  3 Stars </label>
         </div>

         <div> 
            <input type = "checkbox"  
            id = "starcheckbox2"   value = "4"  
            checked = {checkboxstate.starcheckbox2}
            onChange={checkboxhandler} />
            <label> 4 Stars </label>
         </div>

         <div>
          <input type = "checkbox"  
           id = "starcheckbox3"   value = "5"  
           checked = {checkboxstate.starcheckbox3}
           onChange={checkboxhandler} />
          <label> 5 Star </label>
         </div>
         
      </div>

        <div style = {{marginTop:'5%'}}>
          <button onClick={() => clearAllFilters()}> Clear All </button>
        </div>

    </div>
  )
}

export default ProductFilter