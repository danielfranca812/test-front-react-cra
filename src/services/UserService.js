import { api } from "./api";

export async function listUsers() {
  const { data } = await api.get("/users");
  return data;
}

export async function findUserby(id) {
  const { data } = await api.get(`/users/${id}`);
  return data;
}

export async function createUser(user) {
  const { data } = await api.post("/users", user);
  return data;
}

export async function deleteUser(id) {
  const { data } = await api.delete(`/users/${id}`);
  return data;
}

export async function updateUser(id, user) {
  const { data } = await api.put(`/users/${id}`, user);
  return data;
}
