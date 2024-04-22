import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Navigate to="/404-error" />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/404-error",
        element: <Error />,
      },
    ],
  },
]);
