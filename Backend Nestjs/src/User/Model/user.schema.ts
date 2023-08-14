import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // for the 'created at' attribute (populates the createdAt and updatedAt fields accordingly.)
export class User {
  @Prop({ required: true })
  name: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
