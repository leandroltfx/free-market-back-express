import express from 'express';

import ProductController from '../controllers/products-controller.js';

// Configurando rotas
const productsRoutes = express.Router();

productsRoutes
    .get('/products', ProductController.listProducts)
    .post('/products/:userId', ProductController.createProduct);

export default productsRoutes;