import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { Container } from "../../components/Container";
import { Box } from "../../components/Box";
import { Buttons } from "../../components/Button";
import { Inputs } from "../../components/Input";
import "./index.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(email, password);
      await login(email, password);
      navigate("/users");
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.error ?? "Erro ao fazer SignIn");
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
        <h1>SignIn</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb">
            <Inputs
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb">
            <Inputs
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Buttons
            text="Entrar"
            type="submit"
            disabled={loading}
            loading={loading}
          />
        </form>
        {error.length > 0 && <div className="erro">{error ?? ""}</div>}
      </Box>
    </Container>
  );
}

export default SignIn;
