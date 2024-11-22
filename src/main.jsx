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
import Posts from './components/Post/Posts.jsx';
import Details from './components/Details/Details.jsx';
import Comments from './components/Comments/Comments.jsx';
import SingleComments from './SingleComments/SingleComments.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    errorElement : <ErrorPage></ErrorPage>,
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
      },
      {
        path : '/post',
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element : <Posts></Posts>
      },
      {
        path : '/post/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <Details></Details>,
      },
      {
        path : '/comments',
        loader : () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element : <Comments></Comments>,
      },
      {
        path : '/comments/:commentId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element : <SingleComments></SingleComments>,
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
