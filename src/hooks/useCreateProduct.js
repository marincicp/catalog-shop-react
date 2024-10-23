import { useState } from "react";
import { formValidator } from "../utills/helpers";
import { BASE_URL } from "../config/config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCreateProduct() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(1);
  const [productType, setProductType] = useState("virtual");

  function handleCategoryChange(value) {
    setCategoryId(value);
  }

  function handleProductType(value) {
    setProductType(value);
  }

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("category_id", categoryId);
    formData.append("type", productType);

    const isValid = formValidator(Object.fromEntries(formData));
    if (!isValid) {
      return toast.error("Some required fields are empty.");
    }

    try {
      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to create product, please try again.");
      }

      toast.success("Product successfully created");
      navigate("/");
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
    isLoading,
    productType,
    handleProductType,
  };
}
