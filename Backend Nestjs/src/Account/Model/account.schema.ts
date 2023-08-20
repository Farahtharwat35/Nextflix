import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { Subscription } from '../../Subscription/Model/subscription.schema';
import { User } from 'src/User/Model/user.schema';

export type AccountDocument = HydratedDocument<Account>;
@Schema()
export class Account {
    @Prop()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Prop()
    @IsNotEmpty()
    @IsString()
    email: string

    @Prop()
    @IsNotEmpty()
    @IsArray()
    // @ValidateNested({each: true})
    // @Type(() => User)
    users: []

    @Prop()
    @IsNotEmpty()
    @IsString()
    password: string

    @Prop()
    @IsNotEmpty()
    @IsString()
    phoneNo: string

    @Prop()
    @IsNotEmpty()
    // @ValidateNested()
    // @Type(() => Subscription)
    subscription: "Standard" | "Platinum"
}

export const AccountSchema = SchemaFactory.createForClass(Account);
