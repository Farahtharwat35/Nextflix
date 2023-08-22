import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Episode } from '../../Episode/Model/episode.schema';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Season extends Document {

  @Prop([{ type: mongoose.Types.ObjectId, ref: 'Episode', required: true }])
  episodes: mongoose.Types.ObjectId[];

  @Prop([{ type: String, required: true }])
  name: string
}

export const SeasonSchema = SchemaFactory.createForClass(Season);
