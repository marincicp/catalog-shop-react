import { useState } from "react";
import { BASE_URL } from "../config/config";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "./useProducts";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { findProduct } from "../services/productService";
import { useAuthContext } from "./useAuthContext";

export default function useEditProduct() {
  const navigate = useNavigate();
  const { sku } = useParams();

  const [categoryId, setCategoryId] = useState(1);
  const [productType, setProductType] = useState("");

  const { user } = useAuthContext();

  function handleCategoryChange(value) {
    setCategoryId(value);
  }

  function handleProductType(value) {
    setProductType(value);
  }

  const { data: productData, isLoading } = useQuery({
    queryKey: ["product", sku],
    queryFn: () => findProduct(sku),
    onSuccess: (data) => {
      setProductType(data.type);
      setCategoryId(data.category_id);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { categories } = useProducts();

  const queryClient = useQueryClient();
  async function handleSubmit(e) {
    // setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("category_id", categoryId);
    formData.append("type", productType);

    const formDataObj = Object.fromEntries(formData);

    try {
      const res = await fetch(`${BASE_URL}/products/${sku}`, {
        method: "PUT",
        headers: {
          "Content-Type": "aplication/json",
          Authorization: "Bearer " + user?.token,
        },
        body: JSON.stringify(formDataObj),
      });
      if (!res.ok) {
        throw new Error("Failed to edit product, please try again.");
      }

      toast.success("Product successfully edited");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate(`/`);
    } catch (err) {
      toast.error(err.message);
    } finally {
      // setIsLoading(false);
    }
  }

  return {
    handleSubmit,
    categoryId,
    handleCategoryChange,
    categories,
    isLoading,
    productData,
    handleProductType,
    productType,
  };
}
