import { api } from "./api";

export async function login(email, password) {
  const { data } = await api.post("/auth/login", { email, password });
  const { token } = data;
  localStorage.setItem("token", token);
  return data;
}

export function logout() {
  localStorage.removeItem("token");
}
