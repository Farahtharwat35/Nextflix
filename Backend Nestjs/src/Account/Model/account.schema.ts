import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsStrongPassword } from 'class-validator';
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
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
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
    subscription: "Normal" | "Platinum" | null

    @Prop()
    @IsNotEmpty()
    type: "Watcher" | "Admin";
}

export const AccountSchema = SchemaFactory.createForClass(Account);
