import {ProductModel} from '../../models/ProductModel';

interface IDeleteProductRepository {
  id: string
}

export async function deleteProductRepository({ id }: IDeleteProductRepository) {
  try {
    await ProductModel.findByIdAndUpdate(id, { deleted_at: Date.now() });
    return ProductModel.findByIdAndDelete(id);
  } catch {
    return null;
  }
}
