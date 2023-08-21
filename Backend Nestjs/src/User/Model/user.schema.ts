import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { HydratedDocument, now } from 'mongoose';


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  @IsNotEmpty()
  name: string;
  @Prop()
  @IsNotEmpty()
  type: "Watcher" | "Admin";
  @Prop({default: now})
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
