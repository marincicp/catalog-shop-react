import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function useProducts() {
  const context = useContext(ProductContext);

  if (context === undefined) {
    return "useProductsContext must be used within an ProductContextProvider";
  }

  return context;
}
