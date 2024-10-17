import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components";
import { About, Catalog, ProductDetails } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Catalog />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:sku",
        element: <ProductDetails />,
      },
    ],
  },
]);
