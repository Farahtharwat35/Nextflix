import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;
@Schema()
export class Account {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  type: "Watcher" | "Admin";
}

export const AccountSchema = SchemaFactory.createForClass(Account);
