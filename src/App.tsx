
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  type AllProducts = {
     id :number,
     title : string
  }

  const [AllProducts,setAllProducts] = useState<AllProducts[]>([]);

  async function main(){
    const res = await axios.get('https://dummyjson.com/products');
    console.log('res is  =',res.data.products);
    setAllProducts(res.data.products);
  }

  useEffect(() => {
     main();
  },[])


  return (
    <>
         <h2> 
          {AllProducts?.map((i) => 
            <div key = {i?.id}>
             Id is - {i?.id} || 
             Title is - {i?.title}
            </div>
          )}
          </h2>
       <h2> Ecom - app with Toolkit </h2>
    </>
  )
}

export default App
