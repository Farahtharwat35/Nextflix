import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import mongoose, { HydratedDocument, now } from 'mongoose';
import { Account } from 'src/Account/Model/account.schema';


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  account: Account;

  @Prop()
  @IsNotEmpty()
  name: string;

  @Prop({ default: now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
