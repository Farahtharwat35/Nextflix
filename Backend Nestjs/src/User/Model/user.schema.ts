import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmpty, IsIn, IsNotEmpty } from 'class-validator';
import mongoose, { HydratedDocument, now } from 'mongoose';
import { Account } from 'src/Account/Model/account.schema';


export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: Account;
  @Prop()
  @IsNotEmpty()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
