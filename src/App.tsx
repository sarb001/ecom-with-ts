
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    type AllProducts = {
      id :number,
      title : string,
      category : string,
      price : number,
      images : "",
      rating : number,
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
      <div style = {{display: "grid" , gridTemplateColumns:'1fr 1fr', gap : '5px' }}>
            {AllProducts?.map(i => 
                  <div key = {i?.id} className='card' 
                  style = {{backgroundColor:'lightgrey',padding:'2%',margin:'5% 1%' , width:'90%'}}>
                  <div> {i?.id} {i?.title} </div>
                    <div> <img style = {{width:'55%'}} src = {i?.images[0]}  alt = {i?.title} /> </div> 
                    <div> Category - {i?.category} </div>
                    <div> Price -  {i?.price.toFixed()} </div>
                    <div> Rating - {i?.rating.toFixed()} </div>
                  </div>
            )}
          
      </div>
    </>
  )
}

export default App
