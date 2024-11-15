import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path : '/',
    element : <div>Hello form react router</div>,
  },
  {
    path : '/about',
    element : <div className='text-center text-5xl font-bold'>I am in the about page</div>
  },
  {
    path : '/router',
    element : <div className='text-center text-4xl font-bold'>This is Router element</div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
