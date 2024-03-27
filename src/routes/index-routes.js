import express from 'express';

import productsRoutes from "./products-routes.js";
import usersRoutes from './users-routes.js';
import loginRoutes from './login-routes.js';

// A função indexRoutes recebe a instância do Express que fará a configuração das rotas da API.
const indexRoutes = (app) => {
    app.route('/').get((req, res) => { res.status(200).send('API Free Market works!') });

    // Configurando middleware para aceitar transações json em requisições (express.json) 
    // e para fazer uso do objeto que gerencia as rotas da aplicação (livrosRoutes)
    app.use(express.json(), productsRoutes, usersRoutes, loginRoutes);
};

// Disponibiliza a instância da indexRoutes para o arquivo app.js onde será executada antes de iniciar o servidor.
export default indexRoutes;