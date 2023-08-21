import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Episode } from '../../Episode/Model/episode.schema';
import { Document ,Types } from 'mongoose';

@Schema()
export class Season extends Document {

  @Prop([{ type: Types.ObjectId, ref: 'Season' ,required:true}])
  episodes: Episode[]; // Reference to the Episode schema

  @Prop([{ type: String, required: true }])
  name: string
}

export const SeasonSchema = SchemaFactory.createForClass(Season);
