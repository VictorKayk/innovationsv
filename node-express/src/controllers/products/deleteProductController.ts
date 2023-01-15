import {Request, Response} from 'express';
import {deleteProductRepository} from '../../repositories/products/deleteProductRepository';
import Joi from 'joi';

const schema = Joi.object<{
  id: string
}>({
  id: Joi.string().required()
});

export async function deleteProductController(req: Request, res: Response) {
  try {
    // Validação
    const { error, value } = schema.validate(req.params, { abortEarly: false });

    if (error) {
      const errorsMessage = error.details.map(({ message }) => message);
      return res.status(400).json(errorsMessage);
    }

    await deleteProductRepository(value);

    return res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
}
