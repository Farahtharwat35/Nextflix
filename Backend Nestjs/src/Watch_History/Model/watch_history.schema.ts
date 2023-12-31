import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/User/Model/user.schema';

@Schema({ timestamps: true })
export class WatchHistory extends Document {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId })
  media: Types.ObjectId;
}

export const WatchHistorySchema = SchemaFactory.createForClass(WatchHistory);
