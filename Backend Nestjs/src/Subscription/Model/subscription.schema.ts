import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsIn, IsNotEmpty, IsNumber, IsPositive, IsString, ValidateNested } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { Category } from 'src/Category/Model/category.schema';

const tiers = ["Standard", "Premium"];

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
    @ValidateNested({ each: true })
    @Type(() => Category)
    categories: Category[]



}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
