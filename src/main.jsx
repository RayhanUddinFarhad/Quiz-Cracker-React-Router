import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Header/Navbar';
import Home from './components/Main/Home';
import Statics from './components/Main/Statics';
import Blog from './components/Main/Blog';
import About from './components/Main/About';
import Quizs from './components/Main/Quizs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        path: "/",
        element: <Home />,
        loader : () => fetch (`https://openapi.programming-hero.com/api/quiz`)
      },
      {

        path : "Quiz/:id",
        element : <Quizs></Quizs>,
        loader : ({params}) => fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },


      {

        path : "Statics",
        element : <Statics></Statics>,
        loader : () => fetch (`https://openapi.programming-hero.com/api/quiz`)



      }
      ,

      {

        path : "Blog",
        element : <Blog/>
      },

      {


        path : "About",
        element : <About></About>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
