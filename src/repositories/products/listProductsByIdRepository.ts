import {ProductModel} from '../../models/ProductModel';

interface IListProductsByIdRepository {
  id: string
}

export async function listProductsByIdRepository({ id }: IListProductsByIdRepository) {
  try {
    const product = await ProductModel.findById(id);
    return product;
  } catch {
    return null;
  }
}
