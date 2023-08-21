import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
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
    password: string

    @Prop()
    @IsNotEmpty()
    phoneNo: string

    @Prop()
    @IsNotEmpty()
    subscription: "Normal" | "Platinum" | null

    @Prop()
    @IsNotEmpty()
    type: "Watcher" | "Admin";
}

export const AccountSchema = SchemaFactory.createForClass(Account);
