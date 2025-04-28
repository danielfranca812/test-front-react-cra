Projeto CRUD de Usuários

## Tecnologias Utilizadas

- React 18.2.0
- React Router DOM 6.22.3
- Axios para comunicação com API REST
- React Loading para feedback de carregamento
- CSS nativo para estilizações

## Funcionalidades

- 🔑 Login de usuário com armazenamento de token JWT
- 📅 Listagem de usuários (rota protegida)
- 🖊️ Edição de usuário (apenas para Admin)
- 🔒 Exclusão de usuário (apenas para Admin)
- 📲 Responsividade básica na interface
- 🔄 Controle de acesso baseado em tipo de usuário (`admin` ou `default`)

## Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências:
   npm install

3. Inicie o servidor de desenvolvimento:
npm start

## Rotas do Projeto

| `/` | Não | Tela de apresentação (Home) |
| `/signin` | Não | Tela de Login |
| `/users` | Sim | Lista de usuários cadastrados |
| `/users/:userId` | Sim | Edição de um usuário |

## Melhorias Possíveis

- :bar_chart: Paginação na listagem de usuários
- :globe_with_meridians: Melhor responsividade com media queries
- :rocket: Componentização de elementos

Desenvolvido para fins de teste e aprendizado.