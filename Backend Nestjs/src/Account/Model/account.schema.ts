import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/User/Model/user.schema';

export type AccountDocument = HydratedDocument<Account>;
@Schema()
export class Account {
    @Prop()
    @IsNotEmpty()
    name: string;
    @Prop()
    @IsNotEmpty()
    email: string
    @Prop()
    @IsNotEmpty()
    users: User[]
    @Prop()
    @IsNotEmpty()
    password: string
    @Prop()
    @IsNotEmpty()
    pohoneNo: string
    @Prop()
    @IsNotEmpty()
    subscription: "Normal" | "Platinum"

    

}

export const AccountSchema = SchemaFactory.createForClass(Account);
