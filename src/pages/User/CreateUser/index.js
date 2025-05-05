import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateAdmin, CreateUser } from "../../../services/authService";

import { Box } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Flex } from "../../../components/Flex";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Title } from "../../../components/Title";
import { Toast } from "../../../components/Toast";

import "./index.css";

function UserCreate() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      role === "user"
        ? await CreateUser(name, email, password)
        : await CreateAdmin(name, email, password);
      setToast({ type: "success", message: "usuário criado com sucesso!" });
      setTimeout(() => {
        setLoading(false);
        setRole("user");
        navigate("/users");
      }, 2500);
    } catch (error) {
      setLoading(false);
      setToast({ type: "error", message: error.response?.data?.error });
    }
  }

  return (
    <Container>
      <Box>
        <Title level={2} children="Cadastrar Usuário" />
        <form onSubmit={handleSignUp}>
          <Flex direction="column" gap="4px">
            <Input
              label="Nome"
              name="name"
              type="text"
              value={name}
              placeholder="Digite o seu nome"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Email"
              name="email"
              type="text"
              value={email}
              placeholder="Digite o seu email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              value={password}
              placeholder="Digite a sua senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Select
              label="Tipo de Usuário"
              name="role"
              type="select"
              value={role}
              options={[
                { value: "user", label: "Usuário" },
                { value: "admin", label: "Administrador" },
              ]}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </Flex>
          <Flex justify="center">
            <Button
              children="Voltar"
              variant="tertiary"
              loading={null}
              onClick={() => navigate(-1)}
            />
            <Button
              children="Criar Usuário"
              variant="primary"
              type="submit"
              disabled={loading}
              loading={loading}
            />
          </Flex>
        </form>
      </Box>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </Container>
  );
}

export default UserCreate;
