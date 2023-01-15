import {Request, Response} from 'express';
import {listProductsByIdRepository} from '../../repositories/products/listProductsByIdRepository';
import Joi from 'joi';

const schema = Joi.object<{
  id: string
}>({
  id: Joi.string().required()
});

export async function listProductsByIdController(req: Request, res: Response) {
  try {
    // Validação
    const { error, value } = schema.validate(req.params, { abortEarly: false });

    if (error) {
      const errorsMessage = error.details.map(({ message }) => message);
      return res.status(400).json(errorsMessage);
    }

    const product = await listProductsByIdRepository(value);
    if (product) return res.status(200).json(product);

    return res.status(404).json({ message: 'Product not found.'});
  } catch (e) {
    res.sendStatus(500);
  }
}
