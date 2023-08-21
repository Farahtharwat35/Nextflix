import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type Review = {
  reviewer: string;
  content: string;
  rating: number;
};


enum Genre {
  ACTION = 'Action',
  DRAMA = 'Drama',
  COMEDY = 'Comedy',
}

@Schema()
export class Media extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({required:true})
  reviews: Review[];

  @Prop({ required: true })
  poster: string;

  @Prop({ required: true })
  overview: string;

  @Prop({ required: true })
  productionDate: Date;

  @Prop()
  videoTrailer: string; // URL to the video/
  
  @Prop({ required: true, enum: Genre })
  genre: Genre

  @Prop([{ type: String }])
  actors: string[];

}

export const MediaSchema = SchemaFactory.createForClass(Media);
