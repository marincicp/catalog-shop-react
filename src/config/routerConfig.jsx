import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components";
import { About, Catalog, ProductDetails } from "../pages";
import { ProductContextProvider } from "../context/ProductContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProductContextProvider>
        <AppLayout />
      </ProductContextProvider>
    ),
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