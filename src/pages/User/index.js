import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, listUsers } from "../../services/UserService";

import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Flex } from "../../components/Flex";
import { Table } from "../../components/Table";
import { Title } from "../../components/Title";

import "./index.css";

function User() {
  const navigate = useNavigate();
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
        <Title level={2} children={"Usuários"} />
        <Flex direction="column" gap="1rem">
          <Table
            head={listHead}
            data={users}
            role={userAuth?.type}
            handleDelete={handleDelete}
          />
          {userAuth?.type === "admin" && (
            <Flex justify="space-between" gap="1rem">
              <Button
                children={"Voltar"}
                variant="tertiary"
                onClick={() => navigate(-1)}
              />
              <Button
                children={"Adicionar Usuário"}
                variant="primary"
                onClick={() => (window.location.href = "/users/create")}
              />
            </Flex>
          )}
        </Flex>
      </Box>
    </Container>
  );
}
export default User;
