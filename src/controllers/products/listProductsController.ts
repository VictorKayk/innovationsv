import {Request, Response} from 'express';
import {listProductsRepository} from '../../repositories/products/listProductsRepository';

export async function listProductsController(req: Request, res: Response) {
  try {
    const products = await listProductsRepository();

    return res.status(200).json(products);
  } catch (e) {
    res.sendStatus(500);
  }
}
