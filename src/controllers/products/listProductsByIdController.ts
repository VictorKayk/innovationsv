import {Request, Response} from 'express';
import {listProductsByIdRepository} from '../../repositories/products/listProductsByIdRepository';

export async function listProductsByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // Validação
    if (!id) return res.status(400).json({ error: 'Id is required.'});

    const product = await listProductsByIdRepository({ id });
    if (product) return res.status(200).json(product);

    return res.status(404).json({ error: 'User not found.'});
  } catch (e) {
    res.sendStatus(500);
  }
}
