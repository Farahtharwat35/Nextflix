import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsEmpty, IsIn, IsNotEmpty } from 'class-validator';
import { HydratedDocument, now } from 'mongoose';


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  @IsNotEmpty()
  name: string;
  @Prop()
  @IsNotEmpty()
  @IsIn(["Watcher", "Admin"])
  type: string;
  @Prop({default: now})
  @IsEmpty()
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
