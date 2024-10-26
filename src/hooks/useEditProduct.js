import { useEffect, useState } from "react";
import { BASE_URL } from "../config/config";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "./useProducts";
import { useQueryClient } from "@tanstack/react-query";

export default function useEditProduct() {
  const navigate = useNavigate();
  const { sku } = useParams();
  const [productData, setProductData] = useState(null);
  const [categoryId, setCategoryId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [productType, setProductType] = useState("");

  function handleCategoryChange(value) {
    setCategoryId(value);
  }

  function handleProductType(value) {
    setProductType(value);
  }

  const { categories } = useProducts();
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/products/${sku}`);
        const { data } = await res.json();

        if (!res.ok) {
          navigate("/");
          throw new Error("Product not found");
        }

        setProductData({
          name: data.name,
          price: data.price,
          description: data.description || "",
          sku: data.SKU,
          coupon_code: data.coupon_codes || "",
          expires_at: data.expires_at || "",
          color: data.colors || "",
          shipping_price: data.shipping_prices || "",
        });

        setProductType(data.type);
        setCategoryId(data.category_id);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  const queryClient = useQueryClient();
  async function handleSubmit(e) {
    setIsLoading(true);
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
      setIsLoading(false);
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
