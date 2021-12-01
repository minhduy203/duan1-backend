import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDetailDocument = OrderDetail & Document;

@Schema()
export class OrderDetail {
  @Prop()
  price: number;

  @Prop()
  quanity: number;

  @Prop()
  id_product: string;

  @Prop()
  id_order: string;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
