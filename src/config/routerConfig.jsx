import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components";
import {
  About,
  Catalog,
  ProductCreate,
  ProductDetails,
  ProductEdit,
} from "../pages";
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
        path: "/product-create",
        element: <ProductCreate />,
      },
      {
        path: "/product/:sku",
        element: <ProductDetails />,
      },
      {
        path: "/product-edit/:sku",
        element: <ProductEdit />,
      },
    ],
  },
]);
