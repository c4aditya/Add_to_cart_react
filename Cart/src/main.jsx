
import { createRoot } from 'react-dom/client'
import React from 'react'
import ProductProvider from './ContaxtAPI/ProductApi.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <ProductProvider>
     <App/>
   </ProductProvider>
   
 
)
