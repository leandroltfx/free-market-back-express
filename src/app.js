import express from "express";
import indexRoutes from "./routes/index-routes.js";

// Instanciação do Express.
const app = express();

// A função indexRoutes recebe como parâmaetro a instância do Express, contida na variável app,
// para realizar a configuração das rotas da API.
indexRoutes(app);

// Disponibiliza a instância do Express para o arquivo server.js onde será inicializado o servidor.
export default app;