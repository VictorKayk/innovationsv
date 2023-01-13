import {Request, Response} from 'express';
import {createProductRepository} from '../../repositories/products/createProductRepository';

export async function createProductController(req: Request, res: Response) {
  try {
    const { name, category, quantity, status } = req.body;

    // Validação
    if (!name) return res.status(400).json({ error: 'Name is required.'});
    if (!category) return res.status(400).json({ error: 'Category is required.'});
    if ((quantity || quantity === '') && !Number.parseInt(quantity)) {
      return res.status(400).json({ error: 'Quantity must be a number.'});
    }
    if ((status || status === '') && !['ACTIVE', 'INACTIVE'].includes(status.toUpperCase())) {
      return res.status(400).json({ error: 'Status should be one of this: ACTIVE or INACTIVE'});
    }

    const product = await createProductRepository({
      name,
      category,
      quantity: Number.parseInt(quantity),
      status: status.toUpperCase()
    });

    return res.status(201).json(product);
  } catch (e) {
    res.sendStatus(500);
  }
}
