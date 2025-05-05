import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Flex } from "../../components/Flex";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Toast } from "../../components/Toast";

import "./index.css";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
      setToast({ type: "success", message: "Login efetuado com sucesso!" });
      setTimeout(() => {
        setLoading(false);
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
        <Title level={2} children="SignIn" />
        <form onSubmit={handleSignIn}>
          <Flex direction="column" gap="4px">
            <Input
              label="Email"
              name="email"
              type="text"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Senha"
              name="password"
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
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
              children="Entrar"
              variant="primary"
              type="submit"
              disabled={loading}
              loading={loading}
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

export default SignIn;
