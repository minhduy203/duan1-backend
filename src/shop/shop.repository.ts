import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Shop, ShopDocument } from './schemas/shop.schema';

@Injectable()
export class ShopRepository {
  constructor(@InjectModel(Shop.name) private shopModel: Model<ShopDocument>) {}

  async findOne(shopFilterQuery: FilterQuery<Shop>): Promise<Shop> {
    return this.shopModel.findOne(shopFilterQuery);
  }

  async find(shopFilterQuery: FilterQuery<Shop>): Promise<Shop[]> {
    return this.shopModel.find(shopFilterQuery);
  }

  async create(shop: Shop): Promise<Shop> {
    const newShop = new this.shopModel(shop);
    return newShop.save();
  }

  async findOneAndUpdate(
    shopFilterQuery: FilterQuery<Shop>,
    shop: Partial<Shop>,
  ): Promise<Shop> {
    return this.shopModel.findOneAndUpdate(shopFilterQuery, shop, {
      new: true,
      useFindAndModify: false,
    });
  }
}
