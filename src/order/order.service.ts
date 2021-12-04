import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateOrderDto } from './dto/update-order.dto';

import { Order } from './schemas/order.schema';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async getOrderById(_id: string): Promise<Order> {
    return this.orderRepository.findOne({ _id });
  }

  async getOrders(): Promise<Order[]> {
    return this.orderRepository.find({});
  }

  async getOrderByIdShop(id_shop: string): Promise<Order[]> {
    return this.orderRepository.findOrderByIdShop({ id_shop: id_shop });
  }

  async getOrderByIdDeliveryStatus(_id: number): Promise<Order[]> {
    return this.orderRepository.findDeliveryStatus({ delivery_status: _id });
  }

  async getOrderByIdShopAndDeliveryStatus(id_shop: string, deliver_status: number): Promise<Order[]> {
    return this.orderRepository.findOrderByIdShopAndDeliveryStatus({ id_shop: id_shop, delivery_status: deliver_status});
  }

  async getOrderByIdDeliveryAndDeliveryStatus(id_deliver: string, deliver_status: number): Promise<Order[]> {
    return this.orderRepository.getOrderByIdDeliveryAndDeliveryStatus({ id_deliver: id_deliver, delivery_status: deliver_status});
  }

  async createOrder(
    delivery_address: string,
    delivery_status: number,
    total_money: number,
    created_at: Date,
    completed_at: Date,
    payment_status: number,
    id_deliver: string,
    id_client: string,
    id_shop: string,
  ): Promise<Order> {
    return this.orderRepository.create({
      delivery_address,
      delivery_status,
      total_money,
      created_at: new Date(),
      completed_at,
      payment_status,
      id_deliver,
      id_client,
      id_shop,
    });
  }

  async updateOrder(
    _id: string,
    orderUpdates: UpdateOrderDto,
  ): Promise<UpdateOrderDto> {
    return this.orderRepository.findOneAndUpdate({ _id }, orderUpdates);
  }
}
