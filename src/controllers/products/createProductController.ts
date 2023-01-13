import {Request, Response} from 'express';
import {createProductRepository} from '../../repositories/products/createProductRepository';
import Joi from 'joi';
import {ProductType} from '../../types/ProductType';

const schema = Joi.object<{
  name: string,
  category: string,
  quantity: number,
  status: ProductType['status']
}>({
  name: Joi.string().min(2).required(),
  category: Joi.string().min(2).required(),
  quantity: Joi.number().integer().min(0),
  status: Joi.string().valid('ACTIVE', 'INACTIVE').uppercase()
});

export async function createProductController(req: Request, res: Response) {
  try {
    // Validação
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorsMessage = error.details.map(({ message }) => message);
      return res.status(400).json(errorsMessage);
    }

    const product = await createProductRepository(value);

    return res.status(201).json(product);
  } catch (e) {
    res.sendStatus(500);
  }
}
