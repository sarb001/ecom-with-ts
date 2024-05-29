import ProductFilter from "./ProductFilter"
import Products from "./Products"


const ProductSection = () => {
  return (
    <div style = {{display:'grid',gridTemplateColumns:'0.4fr 1.6fr'}}>
            <div> <ProductFilter /> </div>
            <div> <Products /> </div>
    </div>
  )
}

export default ProductSection