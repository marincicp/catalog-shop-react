import toast from "react-hot-toast";
import { BASE_URL } from "../config/config";

export async function getProducts(searchParams) {
  const query = new URLSearchParams(searchParams).toString();

  const res = await fetch(`${BASE_URL}/products?${query}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(res?.statusText);
  }
  const { data } = await res.json();
  return data;
}

export async function deleteProduct({ sku, token = "" }) {
  const res = await fetch(`${BASE_URL}/products/${sku}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to delete product, please try again.");
  }

  return res.json();
}

export async function findProduct(sku) {
  try {
    const res = await fetch(`${BASE_URL}/products/${sku}`);
    const { data } = await res.json();

    if (!res.ok) {
      throw new Error("Product not found");
    }

    return data;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function createProduct(data) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    body: data,
  });
  if (!res.ok) {
    throw new Error("Failed to create product, please try again.");
  }
}
