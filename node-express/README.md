<div align='center'>
  <h1>Innovationsv</h1>
</div>

## 👨‍💻 Projeto

Este projeto é uma WEB API desenvolvida para gerenciamento de uma loja, proporcionando recursos para realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em produtos de maneira eficiente e simples. Ele oferece endpoints para listagem, cadastro, atualização e remoção de produtos, permitindo que os usuários possam gerenciar seus produtos de maneira fácil e intuitiva. 

A arquitetura é limpa e escalável, permitindo fácil manutenção e customização para atender às necessidades do projeto. Além disso, a API é desenvolvida com otimas práticas de desenvolvimento, garantindo segurança e desempenho.

## ⚙️ Tecnologias

- Typescript
- Node.js
- Express
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
   $ cd innovationsv/node-express
   ```
   
   3. Instale as dependências:
   ```
   $ npm run install
   ```

   4.  Inicializa um container chamado "mongo" rodando Mongodb na porta 27017 (porta padrão do mongodb)
   ```
   $ docker run --name mongo -p 27017:27017 -d mongo
   ```

   5. Troque o nome do arquive ".env.example" para ".env" e insira os valores de DATABASE_URL e PORT (ou use os valores padrões).

   6. Inicie a aplicação em modo dev
   ```
   $ npm run dev
   ```

## 🎥 Demo
 
https://user-images.githubusercontent.com/76819323/212410972-48eb54e9-eb05-476e-b2ba-599a963bb330.mp4

---
