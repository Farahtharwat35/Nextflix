import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Media } from 'src/Media/Model/media.schema';
import { User } from 'src/User/Model/user.schema';

@Schema({ timestamps: true })
export class WatchHistory extends Document {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true, type: Types.ObjectId })
  media: Types.ObjectId;
}

export const WatchHistorySchema = SchemaFactory.createForClass(WatchHistory);
