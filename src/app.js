import express from "express";

import indexRoutes from "./routes/index-routes.js";
import connectInDatabase from "./config/db-connect.js";

// Recuperando a conexão
const conexao = await connectInDatabase();

// Tratamento para eventual erro de conexão
conexao.on('error', (erro) => {
    console.error('Erro de conexão', erro);
});

// Tratamento para conexão bem sucedida
conexao.once('open', () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
});

// Instanciação do Express.
const app = express();

// A função indexRoutes recebe como parâmaetro a instância do Express, contida na variável app,
// para realizar a configuração das rotas da API.
indexRoutes(app);

// Disponibiliza a instância do Express para o arquivo server.js onde será inicializado o servidor.
export default app;