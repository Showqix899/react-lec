import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Courses from './components/Courses.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/Courses',
        element:<Courses/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
