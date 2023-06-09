import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import OrdersReview from './Components/OrdersReview/OrdersReview';
import Layout from './Components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path:'orders',
        element: <OrdersReview></OrdersReview>
      }
    ]
  },
  {
    path: 'orders',
    element: <OrdersReview></OrdersReview>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
