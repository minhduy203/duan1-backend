import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { Product } from './schemas/product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':_id')
  async getProduct(@Param('_id') _id: string): Promise<Product> {
    return this.productService.getProductById(_id);
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Post()
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.createProduct(
      createProductDto.name,
      createProductDto.url,
      createProductDto.img,
      createProductDto.price,
      createProductDto.promotional_price,
      createProductDto.amount,
      createProductDto.id_category,
      createProductDto.id_shop,
      createProductDto.create_at,
      createProductDto.description,
      createProductDto.view_amount,
      createProductDto.buy_amount,
      createProductDto.properties,
      createProductDto.is_show,
      createProductDto.isHot,
    );
  }

  @Delete(':_id')
  async deleteProduct(@Param('_id') _id: string): Promise<Product> {
    return this.productService.deleteProduct(_id);
  }

  @Patch(':_id')
  async updateProduct(
    @Param('_id') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(productId, updateProductDto);
  }
}
