import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config/config";
import useFetchProducts from "../hooks/useFetchproducts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const { products, isLoading, error } = useFetchProducts();

  async function handleDelete(sku) {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/products/${sku}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to delete product, please try again.");
      }

      toast.success("Product successfully deleted");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
      navigate("/");
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${BASE_URL}/categories`);
      const { data } = await res.json();
      setCategories(data);
    }

    getData();
  }, []);
  return (
    <ProductContext.Provider
      value={{ categories, products, error, isLoading, handleDelete, loading }}
    >
      {children}
    </ProductContext.Provider>
  );
}
