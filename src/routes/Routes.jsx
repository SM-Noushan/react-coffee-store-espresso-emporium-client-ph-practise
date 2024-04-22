import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <>Error</>,
    children: [
      {
        index: true,
        element: <>Home</>,
      },
      {
        path: "#",
        element: <></>,
      },
    ],
  },
]);
