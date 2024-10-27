import { BASE_URL } from "../config/config";

export async function registerService(data) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",

    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Provided email already exists");

  return res.json();
}

export async function loginService(data) {
  console.log(data, "service data");
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Provided email or password are incorrect");

  return res.json();
}

export async function logoutService() {
  const res = await fetch(`${BASE_URL}/logout`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Something went wrong, please try again");

  return res.json();
}

export async function getCurrentUserService() {
  const res = await fetch(`${BASE_URL}/getSession`, {});

  if (!res.ok)
    throw new Error("Unable to load user information. Please try again");

  return res.json();
}
