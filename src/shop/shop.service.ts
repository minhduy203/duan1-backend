import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateShopDto } from './dto/update-shop.dto';

import { Shop } from './schemas/shop.schema';
import { ShopRepository } from './shop.repository';

@Injectable()
export class ShopService {
  constructor(private readonly shopRepository: ShopRepository) {}

  async getShopById(_id: string): Promise<Shop> {
    return this.shopRepository.findOne({ _id });
  }

  async getShops(): Promise<Shop[]> {
    return this.shopRepository.find({});
  }

  async createShop(
    name: string,
    id_user: string,
    address: string,
    created_at: Date,
  ): Promise<Shop> {
    return this.shopRepository.create({
      name,
      id_user,
      address,
      created_at: new Date(),
    });
  }

  async deleteShop(_id: string): Promise<Shop> {
    return this.shopRepository.delete({ _id });
  }

  async updateShop(_id: string, shopUpdates: UpdateShopDto): Promise<Shop> {
    return this.shopRepository.findOneAndUpdate({ _id }, shopUpdates);
  }
}
