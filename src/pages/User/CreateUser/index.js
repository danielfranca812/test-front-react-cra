import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../../services/authService";
import { Container } from "../../../components/Container";
import { Box } from "../../../components/Box";
import { Buttons } from "../../../components/Button";
import { Inputs } from "../../../components/Input";
import "./index.css";
import { Toast } from "../../../general-components/Toast";

function UserCreate() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(name, email, password);
      await CreateUser(name, email, password);
      navigate("/users");
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.error ?? "Erro ao fazer SignUp");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <Container>
      <Box>
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}>
          <div className="flex-group">
            <h5>Nome</h5>
            <Inputs
              type="text"
              placeholder="Digite o seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex-group">
            <h5>Email</h5>
            <Inputs
              type="text"
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex-group">
            <h5>Senha</h5>
            <Inputs
              type="password"
              placeholder="Digite a sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Buttons variant="btn-tertiary" text="Voltar" loading={null} />
          <Buttons
            variant="btn-primary"
            text="Cadastrar"
            type="submit"
            disabled={loading}
            loading={loading}
          />
        </form>
      </Box>
      <Toast error={error} />
    </Container>
  );
}

export default UserCreate;
