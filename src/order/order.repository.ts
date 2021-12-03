import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Order, OrderDocument } from './schemas/order.schema';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findOne(orderFilterQuery: FilterQuery<Order>): Promise<Order> {
    return this.orderModel.findOne(orderFilterQuery);
  }

  async find(orderFilterQuery: FilterQuery<Order>): Promise<Order[]> {
    return this.orderModel.find(orderFilterQuery);
  }

  async findOrderByIdShop(orderFilterQuery: FilterQuery<Order>): Promise<Order[]> {
    return this.orderModel.find(orderFilterQuery);
  }

  async findDeliveryStatus(orderFilterQuery: FilterQuery<Order>): Promise<Order[]> {
    return this.orderModel.find(orderFilterQuery);
  }

  async findOrderByIdShopAndDeliveryStatus(orderFilterQuery: FilterQuery<Order>): Promise<Order[]> {
    console.log(orderFilterQuery);
    return this.orderModel.find(orderFilterQuery);
  }


  async create(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  async findOneAndUpdate(
    orderFilterQuery: FilterQuery<Order>,
    order: Partial<Order>,
  ): Promise<Order> {
    return this.orderModel.findOneAndUpdate(orderFilterQuery, order, {
      new: true,
      useFindAndModify: false,
    });
  }
}
