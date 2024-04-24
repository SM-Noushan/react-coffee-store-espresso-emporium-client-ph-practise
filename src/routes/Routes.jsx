import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import AddCoffee from "../pages/addCoffee/AddCoffee";
import CoffeeDetails from "../pages/viewDetails/CoffeeDetails";

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
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: `/coffee-details/:id`,
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:6969/coffee-details/${params.id}`),
      },
      {
        path: `/update-coffee-details/:id`,
        element: <AddCoffee update={true} />,
        loader: ({ params }) =>
          fetch(`http://localhost:6969/coffee-details/${params.id}`),
      },
      {
        path: "/404-error",
        element: <Error />,
      },
    ],
  },
]);
