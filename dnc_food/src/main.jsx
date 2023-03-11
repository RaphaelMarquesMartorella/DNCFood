import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PRODUCTS_MOCK } from './Pages/Home/mock/product.mock'
import Home from './Pages/Home/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home data={PRODUCTS_MOCK}/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
