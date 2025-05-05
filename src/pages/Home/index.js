import { Box } from "../../components/Box";
import { Container } from "../../components/Container";
import { Flex } from "../../components/Flex";
import { Title } from "../../components/Title";

import "./index.css";

function Home() {
  const token = localStorage.getItem("token");
  return (
    <Container>
      <Box>
        <Flex direction="column" gap="24px" justify="center">
          <Title level={2} children="Bem-vindo ao Teste SPS Group" />
          <Title
            level={6}
            children="Este projeto foi desenvolvido para avaliar habilidades em React.js,
          integração de APIs REST, autenticação com JWT e criação de CRUDs
          simples."
          />

          {!token && (
            <Flex gap="12px" justify="center" align="center" direction="column">
              <a className="link" href="/signin">
                SignIn
              </a>
            </Flex>
          )}
        </Flex>

        <footer>SPS Group © {new Date().getFullYear()}</footer>
      </Box>
    </Container>
  );
}

export default Home;
