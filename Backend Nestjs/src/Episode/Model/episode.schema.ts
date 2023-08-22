import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsUrl } from 'class-validator';
import mongoose from 'mongoose';
import { Media } from 'src/Media/Model/media.schema';

@Schema()
export class Episode extends Media {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  video: string;

  @Prop()
  poster: string;

  @Prop({ required: true })
  overview: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  @IsUrl()
  url: string;
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
