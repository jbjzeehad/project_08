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
import EventCardDetails from './components/EventCardDetails/EventCardDetails';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';


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
        element: <PrivateRoutes><OrderItems></OrderItems></PrivateRoutes>
      },
      {
        path: "/events",
        element: <Events></Events>
      },

      {
        path: "/shops",
        element: <PrivateRoutes><Shops></Shops></PrivateRoutes>
      },
      {
        path: "/event/:id",
        element: <PrivateRoutes><EventCardDetails></EventCardDetails></PrivateRoutes>,
        loader: () => fetch('data.json')
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
