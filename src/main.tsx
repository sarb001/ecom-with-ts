
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Store } from './store/store.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter >
        <Provider store = {Store}>
            <App />
        </Provider> 
   </BrowserRouter>
)
