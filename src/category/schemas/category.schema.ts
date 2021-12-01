import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  is_show: boolean;

  @Prop()
  image: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
