import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authencation/Register/Register";
import Login from "../Pages/Authencation/Login/Login";


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
        path:"/sign-up",
        element:<Register />
      },
      {
        path:"/sign-in",
        element:<Login />
      }

    ],
  }
]);

export default router;