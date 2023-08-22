import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Media, MediaSchema } from '../../Media/Model/media.schema';
import { IsUrl } from 'class-validator';


@Schema()
export class Movies extends Media {

  @Prop()
  duration: number; // Duration in minutes

  @Prop({ required: true })
  @IsUrl()
  url: string
}

export const MoviesSchema = SchemaFactory.createForClass(Movies);
