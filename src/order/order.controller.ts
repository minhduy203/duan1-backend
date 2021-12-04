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

  @Get('/s/:_id')
  async getOrderByIdDeliveryStatus(@Param('_id') _id: number): Promise<Order[]> {
    return this.orderService.getOrderByIdDeliveryStatus(_id);
  }

  @Get('/shop/:id_shop')
  async getOrderByIdShop(@Param('id_shop') id_shop: string): Promise<Order[]> {
    return this.orderService.getOrderByIdShop(id_shop);
  }

  @Get('/i/:id_shop/s/:delivery_status')
  async getIdShopAndDeliveryStatus(@Param('id_shop') id_shop: string,@Param('delivery_status') delivery_status: number): Promise<Order[]> {
    return this.orderService.getOrderByIdShopAndDeliveryStatus(id_shop, delivery_status);
  }

  @Get('/idDelivery/:id_delivery/s/:delivery_status')
  async getOrderByIdDeliveryAndDeliveryStatus(@Param('id_delivery') id_deliver: string,@Param('delivery_status') delivery_status: number): Promise<Order[]> {
    return this.orderService.getOrderByIdDeliveryAndDeliveryStatus(id_deliver, delivery_status);
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
