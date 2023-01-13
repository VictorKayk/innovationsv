import {Request, Response} from 'express';
import {updateProductRepository} from '../../repositories/products/updateProductRepository';
import Joi from 'joi';
import {ProductType} from '../../types/ProductType';

const schema = Joi.object<{
  id: string,
  name: string,
  category: string,
  quantity: number,
  status: ProductType['status']
}>({
  id: Joi.string().required(),
  name: Joi.string().min(2),
  category: Joi.string().min(2),
  quantity: Joi.number().integer().min(0),
  status: Joi.string().valid('ACTIVE', 'INACTIVE').uppercase()
});

export async function updateProductController(req: Request, res: Response) {
  try {
    // Validação
    const { error, value } = schema.validate({ ...req.body, ...req.params }, { abortEarly: false });

    if (error) {
      const errorsMessage = error.details.map(({ message }) => message);
      return res.status(400).json(errorsMessage);
    }

    const product = await updateProductRepository(value);

    return res.status(200).json(product);
  } catch (e) {
    res.sendStatus(500);
  }
}
