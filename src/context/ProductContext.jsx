import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useQueryParams } from "../hooks";
import { deleteProduct, getProducts } from "../services/productService";
import { getCategories } from "../services/categoryService";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const { searchParams } = useQueryParams();
  const navigate = useNavigate();
  console.log(searchParams, "uuuu");
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  console.log(Object.fromEntries(searchParams), "entries");
  const {
    error,
    data: products,
    isLoading,
  } = useQuery({
    queryKey: ["products", searchParams.toString()],
    queryFn: () => getProducts(Object.fromEntries(searchParams)),
  });

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: handleDelete } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      navigate("/");
    },
  });

  return (
    <ProductContext.Provider
      value={{
        categories,
        products,
        error,
        isLoading,
        handleDelete,
        isDeleting,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
