import { BASE_URL } from "../config/config";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  const { data } = await res.json();

  return data;
}
