import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsEmail, IsIn, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

const tiers = ["Normal", "Platinum"];

export type SubscriptionDocument = HydratedDocument<Subscription>;
@Schema()
export class Subscription {
    @Prop()
    @IsNotEmpty()
    @IsPositive()
    price: number;

    @Prop()
    @IsNotEmpty()
    @IsIn(tiers)
    type: string;

    @Prop()
    @IsNotEmpty()
    @IsArray()
    @IsString({each: true})
    categories: string[]



}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
