import {Router} from 'express';
import {createProductController} from './controllers/products/createProductController';

export const router = Router();

// Rotas dos produtos
router.post('/products', createProductController);
