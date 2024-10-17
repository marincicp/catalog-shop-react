import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config/config";
import useFetchProducts from "../hooks/useFetchproducts";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const { products, isLoading, error } = useFetchProducts();

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${BASE_URL}/categories`);
      const { data } = await res.json();
      setCategories(data);
    }

    getData();
  }, []);
  return (
    <ProductContext.Provider value={{ categories, products, error, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
}
