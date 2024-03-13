import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authencation/Register/Register";
import Login from "../Pages/Authencation/Login/Login";
import Shoes from "../Pages/Shoes/Shoes";
import SingleShoes from "../Pages/Shoes/SingleShoes";
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
        path: "/sign-up",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <Login />,
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
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "my_account",
        element: <Account />,
      },
      // Admin
      {
        path: "manage_user",
        element: <AllUsers />,
      },
      // {
      //   path: "add-product",
      //   element: <AddProduct />,
      // },
      // User
      {
        path: "my_profile",
        element: <Profile />,
      },
      // {
      //   path: "my_orders",
      //   element: <MyOrder />,
      // },
      // {
      //   path: "reward-points",
      //   element: <Reward />,
      // },
      // {
      //   path: "payment-history",
      //   element: <PaymentHistory />,
      // },
    ],
  },
]);

export default router;
