import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Season } from '../../Season/Model/season.schema';

@Schema()
export class Series extends Document {
  @Prop({ required: true })
  title: string;

  @Prop([{ type: mongoose.Types.ObjectId, ref: 'Season', required: true }])
  seasons: mongoose.Types.ObjectId[];
}

export const SeriesSchema = SchemaFactory.createForClass(Series);