import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  type: "Watcher" | "Admin";
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
