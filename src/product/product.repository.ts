import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findOne(productFilterQuery: FilterQuery<Product>): Promise<Product> {
    return this.productModel.findOne(productFilterQuery);
  }

  async find(productFilterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productFilterQuery);
  }

  async findProductByIdCategory(productFilterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productFilterQuery);
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async delete(productFilterQuery: FilterQuery<Product>): Promise<Product> {
    return this.productModel.deleteOne(productFilterQuery);
  }

  async findOneAndUpdate(
    productFilterQuery: FilterQuery<Product>,
    product: Partial<Product>,
  ): Promise<Product> {
    return this.productModel.findOneAndUpdate(productFilterQuery, product, {
      new: true,
      useFindAndModify: false,
    });
  }
}
