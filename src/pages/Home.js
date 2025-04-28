import React from "react";

function Home() {
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
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#2f3640",
          }}
        >
          Bem-vindo ao Teste SPS Group
        </h1>
        <p style={{ fontSize: "16px", color: "#636e72", marginBottom: "30px" }}>
          Este projeto foi desenvolvido para avaliar habilidades em React.js,
          integração de APIs REST, autenticação com JWT e criação de CRUDs
          simples.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <a
            href="/login"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              transition: "background 0.3s",
            }}
          >
            Login
          </a>
          <a
            href="/users"
            style={{
              display: "block",
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px",
              borderRadius: "5px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              transition: "background 0.3s",
            }}
          >
            Usuários
          </a>
        </div>

        <footer
          style={{
            marginTop: "30px",
            fontSize: "12px",
            color: "#b2bec3",
          }}
        >
          SPS Group © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

export default Home;
