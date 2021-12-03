import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import { Shop } from './schemas/shop.schema';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get(':_id')
  async getShop(@Param('_id') _id: string): Promise<Shop> {
    return this.shopService.getShopById(_id);
  }

  @Get('/u/:_id')
  async getShopByIdUser(@Param('_id') _id: string): Promise<Shop[]> {
    return this.shopService.getShopByIdUser(_id);
  }

  @Get()
  async getShops(): Promise<Shop[]> {
    return this.shopService.getShops();
  }

  @Post()
  async createShop(@Body() createShopDto: CreateShopDto): Promise<Shop> {
    return this.shopService.createShop(
      createShopDto.name,
      createShopDto.id_user,
      createShopDto.address,
      createShopDto.created_at,
    );
  }

  @Delete(':_id')
  async deleteUser(@Param('_id') _id: string): Promise<Shop> {
    return this.shopService.deleteShop(_id);
  }

  @Patch(':_id')
  async updateShop(
    @Param('_id') shopId: string,
    @Body() updateShopDto: UpdateShopDto,
  ): Promise<Shop> {
    return this.shopService.updateShop(shopId, updateShopDto);
  }
}
