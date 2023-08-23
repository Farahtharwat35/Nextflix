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

  @Prop()
  author: string;

  @Prop()
  reviews: Review[];

  @Prop()
  poster: string;

  // @Prop({ required: true })
  @Prop()
  overview: string;

  @Prop()
  productionDate: Date;

  @Prop()
  @IsUrl()
  videoTrailer: string; // URL to the video/trailer

  @Prop()
  views: number;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
