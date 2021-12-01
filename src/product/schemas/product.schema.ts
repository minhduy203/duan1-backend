import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  img: string;

  @Prop()
  price: number;

  @Prop()
  promotional_price: number;

  @Prop()
  amount: number;

  @Prop()
  id_category: string;

  @Prop()
  id_shop: string;

  @Prop()
  create_at: Date;

  @Prop()
  description: string;

  @Prop()
  view_amount: number;

  @Prop()
  buy_amount: number;

  @Prop()
  properties: number;

  @Prop()
  is_show: boolean;

  @Prop()
  isHot: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
