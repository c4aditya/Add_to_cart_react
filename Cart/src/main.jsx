
import { createRoot } from 'react-dom/client'
import React from 'react'
import { store } from './Store.jsx'
import App from './App.jsx'
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router'
// import {Provider} from "@reduxjs/toolkit"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Provider store={store}>
     <App/>
     </Provider>
     </BrowserRouter>
   
 
)
