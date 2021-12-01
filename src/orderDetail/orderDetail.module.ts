import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderDetail, OrderDetailSchema } from './schemas/orderDetail.schema';
import { OrderDetailController } from './orderDetail.controller';
import { OrderDetailRepository } from './orderDetail.repository';
import { OrderDetailService } from './orderDetail.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderDetail.name, schema: OrderDetailSchema },
    ]),
  ],
  controllers: [OrderDetailController],
  providers: [OrderDetailService, OrderDetailRepository],
})
export class OrderDetailModule {}
