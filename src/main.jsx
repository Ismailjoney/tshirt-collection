import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Tshirts from './components/tshirts/Tshirts.jsx'
import Home from './components/home/Home.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children : [
      {
        path: '/tshirts',
        element : <Tshirts></Tshirts>,
        loader : async () => fetch('tshirts.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
