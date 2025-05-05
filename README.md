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
- 🔄 Controle de acesso baseado em tipo de usuário (`admin` ou `user`)

## Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências:
   npm install

3. Inicie o servidor de desenvolvimento:
   npm start

## Rotas do Projeto

| `/` | Tela de apresentação (Home) |
| `/signin` | Tela de Login |
| `/signup` | Tela de Login |
| `/users` | Lista de usuários cadastrados |
| `/users/:userId` | Edição de um usuário |
| `/users/create` | Criação de um usuário |

## Melhorias Possíveis

- :bar_chart: Paginação na listagem de usuários
- :globe_with_meridians: Melhor responsividade com media queries
- :rocket: utilização do react-query
- :star: implementação de typescript
- :sparkles: refatoramento do projeto utilizando vite

Desenvolvido para fins de teste e aprendizado.