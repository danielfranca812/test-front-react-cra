import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../services/authService";

import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Flex } from "../../components/Flex";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Toast } from "../../components/Toast";

import "./index.css";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await CreateUser(name, email, password);
      setToast({
        type: "success",
        message: "Cadastro efetuado com sucesso! Realizar o login.",
      });
      setTimeout(() => {
        navigate("/signin");
      }, 2500);
    } catch (error) {
      setLoading(false);
      setToast({ type: "error", message: error.response?.data?.error });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Box>
        <Title level={2} children="SignUp" />
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
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              placeholder="Digite a sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Flex>
          <Flex justify="center">
            <Button
              variant="tertiary"
              loading={null}
              children="Voltar"
              onClick={() => navigate(-1)}
            />
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              loading={loading}
              children="Cadastrar"
            />
          </Flex>
        </form>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </Box>
    </Container>
  );
}

export default SignUp;
