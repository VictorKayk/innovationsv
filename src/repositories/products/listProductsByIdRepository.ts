import {ProductModel} from '../../models/ProductModel';

interface IListProductsByIdRepository {
  id: string
}

export async function listProductsByIdRepository({ id }: IListProductsByIdRepository) {
  try {
    return ProductModel.findById(id);
  } catch {
    return null;
  }
}
