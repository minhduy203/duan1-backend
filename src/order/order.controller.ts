import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { Order } from './schemas/order.schema';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':_id')
  async getOrder(@Param('_id') _id: string): Promise<Order> {
    return this.orderService.getOrderById(_id);
  }

  @Get()
  async getOrders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.createOrder(
      createOrderDto.delivery_address,
      createOrderDto.delivery_status,
      createOrderDto.total_money,
      createOrderDto.created_at,
      createOrderDto.completed_at,
      createOrderDto.payment_status,
      createOrderDto.id_deliver,
      createOrderDto.id_client,
      createOrderDto.id_shop,
    );
  }

  @Patch(':_id')
  async updateOrder(
    @Param('_id') orderId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    return this.orderService.updateOrder(orderId, updateOrderDto);
  }
}
