import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './Routers'
import './index.css'

import { ProductsContextProvider } from './context/productContext'

import { Cart } from './components/Cart_/cart/cart'
import { Login } from './components/Login/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsContextProvider>
     <Routers />
     <Cart />
     <Login/>   
    </ProductsContextProvider>
  </React.StrictMode>,
)
