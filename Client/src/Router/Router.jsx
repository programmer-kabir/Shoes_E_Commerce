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
import MyOrder from "../Pages/Dashboard/UserDashboard/MyOrder";
import Reward from "../Pages/Dashboard/UserDashboard/Reward";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory";
import PrivateRoute from "./PriverRoute";
import AddProduct from "../Pages/Dashboard/AdminDashboard/AddProduct";
import Wishlist from "../Components/Wishlist/Wishlist";

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
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/offer-Shoes",
        element: <Shoes />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
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
      {
        path: "add-product",
        element: <AddProduct />,
      },
      // User
      {
        path: "my_profile",
        element: <Profile />,
      },
      {
        path: "my_orders",
        element: <MyOrder />,
      },
      {
        path: "reward-points",
        element: <Reward />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
