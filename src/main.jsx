import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Users from './components/User/Users.jsx';

const router = createBrowserRouter([
  // {
  //   path : '/',
  //   element : <div className='text-center text-3xl font-bold'>Hello form react router</div>,
  // },
  // {
  //   path : '/about',
  //   element : <div className='text-center text-5xl font-bold'>I am in the about page</div>
  // },
  // {
  //   path : '/router',
  //   element : <div className='text-center text-4xl font-bold'>This is Router element</div>
  // },
  {
    path : '/',
    element : <Home></Home>,
    children : [
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '/portfolio',
        element : <Portfolio></Portfolio>
      },
      {
        path : '/users',
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
