import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SignIn from './components/SignIn/SignIn';
import Root from './Layouts/Root';
import Home from './components/Home/Home';
import AuthProviders from './components/Providers/AuthProviders';
import SignUp from './components/SignUp/SignUp';
import OrderItems from './components/OrderItems/OrderItems';
import Events from './components/Events/Events';
import Shops from './components/Shops/Shops';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/orderitems",
        element: <OrderItems></OrderItems>
      },
      {
        path: "/events",
        element: <Events></Events>
      },
      {
        path: "/shops",
        element: <Shops></Shops>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>

  </React.StrictMode>,
)
