import { api } from "./api";

export async function login(email, password) {
  const { data } = await api.post("/auth/login", { email, password });
  const { token } = data;
  localStorage.setItem("token", token);
  return data;
}

export async function CreateUser(name, email, password) {
  const { data } = await api.post("/users/create-user", {
    name,
    email,
    password,
  });
  return data;
}

export async function CreateAdmin(name, email, password) {
  const { data } = await api.post("/users/create-admin", {
    name,
    email,
    password,
  });
  return data;
}

export function logout() {
  localStorage.removeItem("token");
}
