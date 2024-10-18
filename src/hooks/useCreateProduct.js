import { useReducer, useState } from "react";
import { formValidator } from "../utills/helpers";
import { BASE_URL } from "../config/config";
import { productTypes } from "../constants/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  price: "",
  description: "",
  sku: "",
  productType: "virtual",
  couponCode: "",
  expiresAt: "",
  color: "",
  shippingPrice: "",
  error: "",
  imageUrl: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "INVALID_FORM":
      return { ...state, error: action.value };
    default:
      return state;
  }
}

export default function useCreateProduct() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [categoryId, setCategoryId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  function handleChange(e) {
    dispatch({
      type: "UPDATE",
      field: e.target.name,
      value: e.target.value,
    });
  }

  function handleCategoryChange(value) {
    setCategoryId(value);
  }

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();

    const isValid = formValidator(state, dispatch);
    if (!isValid) {
      return toast.error("Some required fields are empty.");
    }

    try {
      const payload = {
        name: state.name,
        sku: state.sku,
        description: state.description,
        price: state.price,
        type: state.productType,
        category_id: categoryId,
        image_url: state.imageUrl,
      };

      if (state.productType === productTypes.VIRTUAL) {
        payload.coupon_code = state.couponCode;
        payload.expires_at = state.expiresAt;
      } else {
        payload.shipping_price = state.shippingPrice;
        payload.color = state.color;
      }
      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
    handleChange,
    state,
    handleSubmit,
    categoryId,
    handleCategoryChange,
    isLoading,
  };
}
