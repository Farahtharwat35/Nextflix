import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Media, MediaSchema } from '../../Media/Model/media.schema';


@Schema()
export class Movies extends Media {

  @Prop({ required: true })
  duration: number; // Duration in minutes

  @Prop({ required: true })
  url: string
}

export const MoviesSchema = SchemaFactory.createForClass(Movies);
