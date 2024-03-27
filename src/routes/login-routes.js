import express from 'express';

import LoginController from '../controllers/login-controller.js';

// Configurando rotas
const loginRoutes = express.Router();

loginRoutes
    .post('/login', LoginController.login);

export default loginRoutes;