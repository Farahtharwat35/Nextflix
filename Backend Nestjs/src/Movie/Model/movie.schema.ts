import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Media, MediaSchema } from '../../Media/Model/media.schema';

enum Genre {
  ACTION = 'Action',
  DRAMA = 'Drama',
  COMEDY = 'Comedy',
}

@Schema() 
export class Movies extends Media {
  @Prop({ required: true, enum: Genre })
  genre: Genre

  @Prop([{ type: String }])
  actors: string[];

  @Prop({ required: true })
  duration: number; // Duration in minutes
}

export const MoviesSchema = SchemaFactory.createForClass(Movies);
