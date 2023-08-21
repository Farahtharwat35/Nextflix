import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Season } from '../../Season/Model/season.schema'; // Import the Season schema
import { Media, MediaSchema } from '../../Media/Model/media.schema'; 

@Schema()
export class Series extends Media {
  @Prop({ required: true })
  title: string;

  @Prop([{ type: Types.ObjectId, ref: 'Season' }])
  seasons: Season[]; // Reference to the Season schema
}

export const SeriesSchema = SchemaFactory.createForClass(Series); //create a Mongoose model (acts as a blueprint for creating documents based on the defined schema.)
