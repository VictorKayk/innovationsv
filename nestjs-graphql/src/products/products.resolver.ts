import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductInput, UpdateProductInput } from './products.input';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation('createProduct')
  create(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  @Query('products')
  findAll() {
    return this.productsService.findAll();
  }

  @Query('product')
  findOne(@Args('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Mutation('updateProduct')
  update(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productsService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: string) {
    return this.productsService.remove(id);
  }
}
