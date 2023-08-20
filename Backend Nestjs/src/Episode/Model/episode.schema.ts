import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Episode extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  video: string;

  @Prop()
  poster: string; 

  @Prop({ required: true })
  overview: string;

  @Prop({ required: true })
  duration: number ;

}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
