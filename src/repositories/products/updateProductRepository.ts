import {ProductType} from '../../types/ProductType';
import {ProductModel} from '../../models/ProductModel';

interface IUpdateProductRepository {
  id: string
  name?: string,
  category?: string,
  quantity?: number,
  status?: ProductType['status'],
}
export async function updateProductRepository({ id, name, category, quantity, status }: IUpdateProductRepository) {
  const product = await ProductModel.findByIdAndUpdate(id, { name, category, quantity, status, updated_at: Date.now() });
  return product;
}
