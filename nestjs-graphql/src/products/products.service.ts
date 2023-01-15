import { Injectable } from '@nestjs/common';
import { CreateProductInput, UpdateProductInput } from './products.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  create({ name, status, quantity, category }: CreateProductInput) {
    return this.productModel.create({ name, status, quantity, category });
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, { name, status, quantity, category }: UpdateProductInput) {
    return this.productModel.findByIdAndUpdate(id, {
      name,
      status,
      quantity,
      category,
      updated_at: Date.now(),
    });
  }

  async remove(id: string) {
    await this.productModel.findByIdAndUpdate(id, {
      deleted_at: Date.now(),
    });
    return this.productModel.findByIdAndDelete(id);
  }
}
