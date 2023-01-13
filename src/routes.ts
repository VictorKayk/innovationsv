import {Router} from 'express';
import {createProductController} from './controllers/products/createProductController';
import {listProductsController} from './controllers/products/listProductsController';

export const router = Router();

// Rotas dos produtos
router.get('/products', listProductsController);
router.post('/products', createProductController);
