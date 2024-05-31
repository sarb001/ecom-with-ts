
import './App.css';
import ProductSection from './components/ProductSection';
import { Routes ,Route } from 'react-router-dom' ;
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {

  return (
     <>
     <Navbar />
      <Routes>
          <Route path='/' element = {<Home />}>  </Route>
          <Route path='/cart' element = {<Cart />}>  </Route>
          <Route path='/shop' element = {<ProductSection />}>  </Route>
      </Routes>
      
    </>
  )
}

export default App
