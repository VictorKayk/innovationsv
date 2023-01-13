import {Router} from 'express';
import {createProductController} from './controllers/products/createProductController';
import {listProductsController} from './controllers/products/listProductsController';
import {listProductsByIdController} from './controllers/products/listProductsByIdController';

export const router = Router();

// Rotas dos produtos
router.get('/products', listProductsController);
router.get('/products/:id', listProductsByIdController);
router.post('/products', createProductController);
