import React, { useEffect, useState } from "react";
import { deleteUser, listUsers } from "../../services/UserService";
import { Container } from "../../general-components/Container";
import { Box } from "../../general-components/Box";
import { Table } from "./components/Table";
import "./index.css";

function User() {
  const [users, setUsers] = useState([]);
  const [userAuth, setUserAuth] = useState(null);

  async function fetchUsers() {
    try {
      const usersData = await listUsers();
      setUsers(usersData);
      const token = localStorage.getItem("token");
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserAuth(payload);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }

  async function handleDelete(userId) {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        await deleteUser(userId);
      } catch (error) {
        console.error("Failed to delete user:", error);
      } finally {
        fetchUsers();
      }
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const listHead = [
    {
      name: "Nome",
      permition: true,
    },

    {
      name: "Email",
      permition: true,
    },

    {
      name: "Tipo",
      permition: true,
    },

    {
      name: "Ações",
      permition: userAuth?.type === "admin",
    },
  ];

  return (
    <Container>
      <Box>
        <h1>Usuários</h1>
        <Table
          head={listHead}
          data={users}
          role={userAuth?.type}
          handleDelete={handleDelete}
        />
      </Box>
    </Container>
  );
}
export default User;
