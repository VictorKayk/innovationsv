<div align='center'>
  <h1>Innovationsv</h1>
</div>

## 👨‍💻 Projeto

Este projeto é uma WEB API desenvolvida com NestJS e GraphQL para gerenciamento de uma loja. Ele utiliza NestJS, um framework para Node.js que fornece uma estrutura de aplicação escalável e modular, permitindo uma fácil manutenção e customização. Além disso, foi utilizado GraphQL, uma linguagem de consulta para APIs, que permite que os usuários obtenham apenas os dados que eles precisam, melhorando a eficiência e flexibilidade da API.

Com essas tecnologias, este projeto oferece recursos para realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em produtos de maneira eficiente e simples, com endpoints para listagem, cadastro, atualização e remoção de produtos. Além disso, a arquitetura é limpa e escalável, garantindo segurança e desempenho.

## ⚙️ Tecnologias

- Typescript
- Node.js
- NestJs
- Graphql
- MongoDB
- Mongoose
- Docker
- Axios

## 🤔 Como usar?

   
   1. Clone esse repositório:
   ```
   $ git clone https://github.com/VictorKayk/innovationsv.git
   ```

   2. Entre no diretório:
   ```
   $ cd innovationsv/nestjs-graphql
   ```
   
   3. Instale as dependências:
   ```
   $ yarn install
   ```

   4.  Inicializa um container chamado "mongo" rodando Mongodb na porta 27017 (porta padrão do mongodb)
   ```
   $ yarn docker:up
   ```

   5. Troque o nome do arquive ".env.example" para ".env" e insira os valores de DATABASE_URL e PORT (ou use os valores padrões).

   6. Inicie a aplicação em modo dev
   ```
   $ yarn start:dev
   ```

## 🎥 Demo
 
https://user-images.githubusercontent.com/76819323/212574382-f8d4d2a0-3014-4af5-beaf-4495dd1611c9.mp4 

---
