import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Shoes from "../Pages/Shoes/Shoes";
import SingleShoes from "../Pages/Shoes/SingleShoes";
import DiscountPage from "../Pages/DiscountPage/DiscountPage";
import Login from "../Pages/Authenction/Login";
import Register from "../Pages/Authenction/Register";
import Dashboard from "../Layout/Dashboard";
import Account from "../Pages/Dashboard/Shared/Account";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
import Profile from "../Pages/Dashboard/UserDashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/:shoes",
        element: <Shoes />,
      },
      {
        path: "/:mens_formal_shoes/:id",
        element: <SingleShoes />,
        loader: ({ params }) => `http://localhost:5173/:shoes/${params.id}`,
      },
      {
        path: "/discount",
        element: <DiscountPage />,
      },
      {
        path: "/offer-Shoes",
        element: <Shoes />,
      },
    ],
  },
  {
    path:"dashboard",
    element:<Dashboard />,
   children:[
    {
      path:"my_account",
      element:<Account />
    },
    // Admin
    {
      path:'manage_user',
      element:<AllUsers />
    },
    // User
    {
      path:'my_profile',
      element:<Profile />
    },
   
   ]
  }
]);

export default router;
