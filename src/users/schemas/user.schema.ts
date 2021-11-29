import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop()
    full_name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: string;

    @Prop()
    address: string;

    @Prop()
    phone_number: string;

    @Prop()
    created_at: Date;

    @Prop()
    avatar: string;

    @Prop()
    isActive: boolean;

    @Prop()
    birth_date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);