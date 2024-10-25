import toast from "react-hot-toast";
import { BASE_URL } from "../config/config";

export async function getProducts(searchParams) {
  const query = new URLSearchParams(searchParams).toString();

  const res = await fetch(`${BASE_URL}/products?${query}`);
  console.log(res, "rekkkkkkkk");
  if (!res.ok) {
    throw new Error(res?.statusText);
  }
  const { data } = await res.json();
  return data;
}

export async function deleteProduct(sku) {
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
  }
}

export async function findProduct(sku) {
  console.log(sku, "ksu");
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
