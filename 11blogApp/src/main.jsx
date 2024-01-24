import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import store from './store/store.js'
import { AddPost, AllPosts, EditPost, Home, Login, Post, Signup } from "./pages/index.js"
import Authenticate from "./components/AuthLayout.jsx"
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: (
          <Authenticate authentication={false}>
            <Login/>
          </Authenticate>
        )
      },
      {
        path: "/signup",
        element: (
          <Authenticate authentication={false}>
            <Signup/>
          </Authenticate>
        )
      },
      {
        path: "/all-posts",
        element: (
          <Authenticate authentication>
            <AllPosts/>
          </Authenticate>
        )
      },
      {
        path: "/add-post",
        element: (
          <Authenticate authentication>
            <AddPost/>
          </Authenticate>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Authenticate authentication>
            <EditPost/>
          </Authenticate>
        )
      },
      {
        path: "/post/:slug",
        element: (
          <Authenticate authentication>
            <Post/>
          </Authenticate>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
