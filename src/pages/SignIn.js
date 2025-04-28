import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Sigin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
      navigate("/users");
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.error ?? "Erro ao fazer login");
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
    <div
      style={{
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "40px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1>Login</h1>
        <form onSubmit={handleSignIn}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", minWidth: "360px", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#0055b1",
              borderRadius: "12px",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {loading ? (
              <ReactLoading
                type="spin"
                style={{
                  width: "24px",
                  height: "24px",
                  margin: "0 auto",
                }}
                color="#ffffff"
                delay={0}
              />
            ) : (
              "Entrar"
            )}
          </button>
        </form>
        {error.length > 0 && (
          <div
            style={{
              color: "red",
              position: "absolute",
              bottom: "24px",
              right: "24px",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              padding: "12px",
              borderRadius: "12px",
            }}
          >
            {error ?? ""}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sigin;
