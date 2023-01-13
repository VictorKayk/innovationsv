import {Request, Response} from 'express';
import {updateProductRepository} from '../../repositories/products/updateProductRepository';

export async function updateProductController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, category, quantity, status } = req.body;

    // Validação
    if (!id) return res.status(400).json({ error: 'Id is required.'});
    if (quantity || quantity === '') {
      if (!Number.parseInt(quantity)) return res.status(400).json({ error: 'Quantity must be a number.'});
      if (quantity < 0) return res.status(400).json({ error: 'Quantity must be a integer.'});
    }
    if (status || status === '') {
      if (!['ACTIVE', 'INACTIVE'].includes(status.toUpperCase())) {
        return res.status(400).json({ error: 'Status should be one of this: ACTIVE or INACTIVE'});
      }
    }

    const product = await updateProductRepository({
      id,
      name,
      category,
      quantity: quantity && Number.parseInt(quantity),
      status: status && status.toUpperCase()
    });

    return res.status(200).json(product);
  } catch (e) {
    res.sendStatus(500);
  }
}
