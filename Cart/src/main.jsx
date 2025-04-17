
import { createRoot } from 'react-dom/client'
import React from 'react'
import { store } from './Store.jsx'
import App from './App.jsx'
import {Provider} from "react-redux"
// import {Provider} from "@reduxjs/toolkit"
createRoot(document.getElementById('root')).render(
 <Provider store={store}>
     <App/>
     </Provider>
   
 
)
