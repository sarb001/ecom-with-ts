
import { Provider } from 'react-redux';
import './App.css';
import ProductSection from './components/ProductSection';
import { Store } from './store/store';

function App() {

  return (
     <>
      <Provider store = {Store}>
        <ProductSection />
      </Provider> 
    </>
  )
}

export default App
