import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authencation/Register/Register";
import Login from "../Pages/Authencation/Login/Login";
import Shoes from "../Pages/Shoes/Shoes";
import SingleShoes from "../Pages/Shoes/SingleShoes";

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
]);

export default router;
