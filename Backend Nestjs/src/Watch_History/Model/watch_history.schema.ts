import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; 

@Schema({ timestamps: true })
export class WatchHistory extends Document {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' }) 

  @Prop({ required: true, type: Types.ObjectId, ref: 'Episode' }) 
  episodeId: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Movie' }) 
  movieId: string;
}

export const WatchHistorySchema = SchemaFactory.createForClass(WatchHistory);
