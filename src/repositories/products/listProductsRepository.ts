import {ProductModel} from '../../models/ProductModel';

export async function listProductsRepository() {
  return ProductModel.find().sort({ created_at: 1 });
}
