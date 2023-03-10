import {ProductType} from '../../types/ProductType';
import {ProductModel} from '../../models/ProductModel';

interface ICreateProductRepository {
  name: string,
  category: string,
  quantity?: number,
  status?: ProductType['status'],
}
export async function createProductRepository({ name, category, quantity, status }: ICreateProductRepository) {
  return ProductModel.create({ name, category, quantity, status });
}
