import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

import { OrderDetail } from './schemas/orderDetail.schema';
import { OrderDetailRepository } from './orderDetail.repository';

@Injectable()
export class OrderDetailService {
  constructor(private readonly orderDetailRepository: OrderDetailRepository) {}

  async getOrderDetailById(_id: string): Promise<OrderDetail> {
    return this.orderDetailRepository.findOne({ _id });
  }

  async getOrderDetails(): Promise<OrderDetail[]> {
    return this.orderDetailRepository.find({});
  }

  async createOrderDetail(
    price: number,
    quanity: number,
    id_product: string,
    id_order: string,
  ): Promise<OrderDetail> {
    return this.orderDetailRepository.create({
      price,
      quanity,
      id_product,
      id_order,
    });
  }

  async updateOrderDetail(
    _id: string,
    orderDetailUpdates: UpdateOrderDetailDto,
  ): Promise<UpdateOrderDetailDto> {
    return this.orderDetailRepository.findOneAndUpdate(
      { _id },
      orderDetailUpdates,
    );
  }
}
