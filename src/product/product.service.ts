import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateProductDto } from './dto/update-product.dto';

import { Product } from './schemas/product.schema';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductById(_id: string): Promise<Product> {
    return this.productRepository.findOne({ _id });
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find({});
  }

  async getProductByIdCategory(_id: string): Promise<Product[]> {
    return this.productRepository.findProductByIdCategory({ id_category: _id });
  }

  async createProduct(
    name: string,
    url: string,
    img: string,
    price: number,
    promotional_price: number,
    amount: number,
    id_category: string,
    id_shop: string,
    create_at: Date,
    description: string,
    view_amount: number,
    buy_amount: number,
    properties: number,
    is_show: boolean,
    isHot: boolean,
  ): Promise<Product> {
    return this.productRepository.create({
      name,
      url,
      img,
      price,
      promotional_price,
      amount,
      id_category,
      id_shop,
      create_at: new Date(),
      description,
      view_amount,
      buy_amount,
      properties,
      is_show,
      isHot,
    });
  }

  async deleteProduct(_id: string): Promise<Product> {
    return this.productRepository.delete({ _id });
  }

  async updateProduct(
    _id: string,
    productUpdates: UpdateProductDto,
  ): Promise<Product> {
    return this.productRepository.findOneAndUpdate({ _id }, productUpdates);
  }
}
