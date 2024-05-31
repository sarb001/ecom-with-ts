
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div style = {{display:'grid' ,gridTemplateColumns:'1fr 1fr',justifyContent:'space-between' , padding:'2%' ,backgroundColor:'lightgrey'}}>
    
      <div>
         <div> <Link to = "/"> Ecommerce </Link>  </div>
      </div>

      <div style = {{display:'flex',justifyContent:'space-between'}}> 
          <div>  <Link to ="/cart"> Cart </Link>  </div>
          <div>  <Link to ="/shop"> Shop </Link>   </div>
          <div>  <Link to ="/profile"> Profile </Link>   </div>
      </div>

    </div>
  )
}

export default Navbar