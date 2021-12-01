import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShopDocument = Shop & Document;

@Schema()
export class Shop {
  @Prop()
  name: string;

  @Prop()
  id_user: string;

  @Prop()
  address: string;

  @Prop()
  created_at: Date;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);
