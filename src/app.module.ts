import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ShopModule } from './shop/shop.module';
import { CategoryModule } from './category/category.module';
import { RolePendingModule } from './rolePending/rolePending.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './orderDetail/orderDetail.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/duan1'),
    UsersModule,
    ShopModule,
    CategoryModule,
    RolePendingModule,
    ProductModule,
    OrderModule,
    OrderDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
