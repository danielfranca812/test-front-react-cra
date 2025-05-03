import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { Buttons } from "../../general-components/Button";
import { Inputs } from "../../general-components/Input";
import { Container } from "../../general-components/Container";
import { Toast } from "../../general-components/Toast";
import { Box } from "../../general-components/Box";
import "./index.css";
import { Flex } from "../../general-components/Flex";

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
      console.log(email, password);
      await login(email, password);
      setToast({ type: "success", message: "Login efetuado com sucesso!" });
      navigate("/users");
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
          <Flex justify="center">
            <Buttons children="Voltar" variant="tertiary" loading={null} />
            <Buttons
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
