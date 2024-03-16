import express from 'express';

import UsersController from '../controllers/users-controller.js';

// Configurando rotas
const usersRoutes = express.Router();

usersRoutes
    .post('/users', UsersController.createUser);

export default usersRoutes;