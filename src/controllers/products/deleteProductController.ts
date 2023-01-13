import {Request, Response} from 'express';
import {deleteProductRepository} from '../../repositories/products/deleteProductRepository';

export async function deleteProductController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // Validação
    if (!id) return res.status(400).json({ error: 'Id is required.'});

    await deleteProductRepository({ id });

    return res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
}
