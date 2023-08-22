import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsUrl } from 'class-validator';
import { Document, Types } from 'mongoose';

export type Review = {
  reviewer: string;
  content: string;
  rating: number;
};

@Schema()
export class Media extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  reviews: Review[];

  @Prop({ required: true })
  poster: string;

  @Prop({ required: true })
  overview: string;

  @Prop({ required: true })
  productionDate: Date;

  @Prop()
  @IsUrl()
  videoTrailer: string; // URL to the video/trailer

  @Prop()
  views: number;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
