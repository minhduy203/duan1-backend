import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

import { OrderDetail } from './schemas/orderDetail.schema';
import { OrderDetailService } from './orderDetail.service';

@Controller('orderDetail')
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @Get(':_id')
  async getOrder(@Param('_id') _id: string): Promise<OrderDetail> {
    return this.orderDetailService.getOrderDetailById(_id);
  }

  @Get()
  async getOrders(): Promise<OrderDetail[]> {
    return this.orderDetailService.getOrderDetails();
  }

  @Post()
  async createOrderDetail(
    @Body() createOrderDetailDto: CreateOrderDetailDto,
  ): Promise<OrderDetail> {
    return this.orderDetailService.createOrderDetail(
      createOrderDetailDto.price,
      createOrderDetailDto.quanity,
      createOrderDetailDto.id_product,
      createOrderDetailDto.id_order,
    );
  }

  @Patch(':_id')
  async updateOrderDetail(
    @Param('_id') orderDetailId: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ): Promise<OrderDetail> {
    return this.orderDetailService.updateOrderDetail(
      orderDetailId,
      updateOrderDetailDto,
    );
  }
}
