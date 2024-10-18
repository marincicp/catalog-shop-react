import { useEffect, useReducer, useState } from "react";
import { BASE_URL } from "../config/config";
import { productTypes } from "../constants/constants";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "./useProducts";

const initialState = {
  name: "",
  price: "",
  description: "",
  sku: "",
  productType: "",
  couponCode: "",
  expiresAt: "",
  color: "",
  shippingPrice: "",
  error: "",
  imageUrl: "",
  currentImg: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_PRODUCT":
      return {
        ...state,
        name: action.payload.name,
        price: action.payload.price,
        description: action.payload.description || "",
        sku: action.payload.SKU,
        productType: action.payload.type,
        couponCode: action.payload.coupon_codes || "",
        expiresAt: action.payload.expires_at || "",
        color: action.payload.colors || "",
        shippingPrice: action.payload.shipping_prices || "",
        currentImg: action.payload.image_url,
        imageUrl: "",
      };

    case "INVALID_FORM":
      return { ...state, error: action.value };
    default:
      return state;
  }
}

export default function useEditProduct() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { sku } = useParams();
  const [categoryId, setCategoryId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  function handleChange(e) {
    dispatch({
      type: "UPDATE",
      field: e.target.name,
      value: e.target.value,
    });
  }
  const { categories } = useProducts();
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${BASE_URL}/products/${sku}`);
        const { data } = await res.json();

        if (!res.ok) {
          navigate("/");
          throw new Error("Product not found");
        }

        console.log(data, "dataaaa");
        dispatch({ type: "SET_PRODUCT", payload: data });
      } catch (err) {
        toast.error(err.message);
      }
    }
    getData();
  }, []);

  function handleCategoryChange(value) {
    setCategoryId(value);
  }

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();

    const payload = {
      name: state.name,
      description: state.description,
      price: state.price,
      type: state.productType,
      category_id: categoryId,
      image_url: state.currentImg,
      sku: state.sku,
    };

    if (state.productType === productTypes.VIRTUAL) {
      payload.coupon_code = state.couponCode;
      payload.expires_at = state.expiresAt;
    } else {
      payload.shipping_price = state.shippingPrice;
      payload.color = state.color;
    }
    console.log(payload);

    try {
      console.log(payload, "payload");
      const res = await fetch(`${BASE_URL}/products/${sku}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("Failed to edit product, please try again.");
      }

      toast.success("Product successfully edited");
      navigate(`/`);
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
    categories,
    isLoading,
  };
}
