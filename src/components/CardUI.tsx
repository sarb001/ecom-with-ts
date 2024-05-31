
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { RemovefromCart, cartType } from '../slices/CartSlice';

const CardUI = ({product}:any) => {

    console.log('card specific product =',product);
    const { id ,title , price ,rating , images, category  } = product;

    const dispatch = useDispatch<AppDispatch>();
    
    const { cart ,  productquantity} = useSelector((state : RootState) => state?.cart);

    const Removefromcart = (id:number) => {
        console.log('slected id-',id);
        dispatch(RemovefromCart(id));
    } 

  return (
    
         <div key = {id} className='card' 
                  style = {{backgroundColor:'lightgrey',padding:'2%',margin:'5% 1%' , width:'40%' , minHeight:'30vh'}}>
                  <div> {id} {title} </div>
                    <div style = {{width:'60%' ,height:'30vh'}}> 
                      <img style = {{width:'95%' ,height:'29vh' ,objectFit:'contain'}} src = {images[0]}  alt = {title} />
                    </div> 
                    <div style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'9px'}}> 
                      <div> {category} Only </div> 
                      <div> Price -  Rs.{price.toFixed()} </div>
                      <div> Rating - {rating.toFixed()} Star </div>
                    </div>
                    <div>
                       <button onClick={() => Removefromcart(id)}
                       style = {{padding:'3%',backgroundColor:'lightskyblue'}}> 
                       Remove from Cart </button>
                    </div>
                    <div style = {{marginTop:'4%' ,display:'grid' , gridTemplateColumns:'1fr 1fr 1fr',justifyContent:'space-between'}}>
                      <button 
                       style = {{width:'50%',padding:'3%',backgroundColor:'lightgreen'}}>  Increment ++ </button>
                        <div> {productquantity} </div>
                      <button  style = {{width:'50%' ,
                      padding:'3%',backgroundColor:'lightgreen'}}>  Decrement -- </button>
                    </div>
         </div>
  )
}

export default CardUI