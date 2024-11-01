import { createBrowserRouter } from "react-router-dom";
import { AppLayout, ProtectedRoute } from "../components";
import {
  About,
  Catalog,
  Login,
  PageNotFound,
  ProductCreate,
  ProductDetails,
  ProductEdit,
  Register,
} from "../pages";
import { ProductContextProvider } from "../context/ProductContext";
import { AuthContextProvider } from "../context/AuthContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <ProductContextProvider>
          <AppLayout />
        </ProductContextProvider>
      </AuthContextProvider>
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
        element: (
          <ProtectedRoute>
            <ProductCreate />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product/:sku",
        element: <ProductDetails />,
      },
      {
        path: "/product-edit/:sku",
        element: (
          <ProtectedRoute>
            <ProductEdit />,
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
