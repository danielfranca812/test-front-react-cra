import React from "react";
import { Container } from "../../general-components/Container";
import "./index.css";
import { Box } from "../../general-components/Box";

function Home() {
  const token = localStorage.getItem("token");
  return (
    <Container>
      <Box>
        <h1>Bem-vindo ao Teste SPS Group</h1>
        <p style={{ fontSize: "16px", color: "#636e72", marginBottom: "30px" }}>
          Este projeto foi desenvolvido para avaliar habilidades em React.js,
          integração de APIs REST, autenticação com JWT e criação de CRUDs
          simples.
        </p>
        {!token && (
          <div className="flex">
            <a className="link" href="/signin">
              SignIn
            </a>
          </div>
        )}

        <footer>SPS Group © {new Date().getFullYear()}</footer>
      </Box>
    </Container>
  );
}

export default Home;
