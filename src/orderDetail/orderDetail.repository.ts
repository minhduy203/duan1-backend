import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { OrderDetail, OrderDetailDocument } from './schemas/orderDetail.schema';

@Injectable()
export class OrderDetailRepository {
  constructor(
    @InjectModel(OrderDetail.name)
    private orderDetailModel: Model<OrderDetailDocument>,
  ) {}

  async findOne(
    orderDetailFilterQuery: FilterQuery<OrderDetail>,
  ): Promise<OrderDetail> {
    return this.orderDetailModel.findOne(orderDetailFilterQuery);
  }

  async find(
    orderDetailFilterQuery: FilterQuery<OrderDetail>,
  ): Promise<OrderDetail[]> {
    return this.orderDetailModel.find(orderDetailFilterQuery);
  }

  async create(orderDetail: OrderDetail): Promise<OrderDetail> {
    const newOrderDetail = new this.orderDetailModel(orderDetail);
    return newOrderDetail.save();
  }

  async findOneAndUpdate(
    orderDetailFilterQuery: FilterQuery<OrderDetail>,
    orderDetail: Partial<OrderDetail>,
  ): Promise<OrderDetail> {
    return this.orderDetailModel.findOneAndUpdate(
      orderDetailFilterQuery,
      orderDetail,
      {
        new: true,
        useFindAndModify: false,
      },
    );
  }
}
