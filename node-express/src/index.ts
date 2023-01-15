import express from 'express';
import { env } from './config/env';
import { cors } from './middlewares/cors';
import { router } from './routes';
import {errorHandler} from './middlewares/errorHandler';
import mongoose from 'mongoose';

async function server() {
  try {
    // Conexão com o banco de dados
    mongoose.set('strictQuery', true);
    await mongoose.connect(env.databaseUrl);

    const app = express();

    // Middlewares
    app.use(express.json());
    app.use(cors);

    // Rotas
    app.use(router);

    // Error Handler
    app.use(errorHandler);

    // Iniciando Servidor
    app.listen(env.port, () => console.log(`Server listening on port: ${env.port}`));
  } catch (e) {
    console.log(e);
  }
}

server();
