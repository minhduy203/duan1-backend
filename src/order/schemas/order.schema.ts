import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  delivery_address: string;

  @Prop()
  delivery_status: number;

  @Prop()
  total_money: number;

  @Prop()
  created_at: Date;

  @Prop()
  completed_at: Date;

  @Prop()
  payment_status: number;

  @Prop()
  id_deliver: string;

  @Prop()
  id_client: string;

  @Prop()
  id_shop: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
