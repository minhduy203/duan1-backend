import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RolePendingDocument = RolePending & Document;

@Schema()
export class RolePending {
  @Prop()
  id_user: string;

  @Prop()
  required_role: number;
}

export const RolePendingSchema = SchemaFactory.createForClass(RolePending);
