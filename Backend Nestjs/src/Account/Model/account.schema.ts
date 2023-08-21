import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsStrongPassword } from 'class-validator';
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
    @IsStrongPassword()
    password: string 
    @Prop()
    @IsNotEmpty()
    @IsPhoneNumber()
    phoneNo: string
    @Prop()
    @IsNotEmpty()
    subscription: "Normal" | "Platinum"

    

}

export const AccountSchema = SchemaFactory.createForClass(Account);
