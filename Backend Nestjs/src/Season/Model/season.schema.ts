import { Prop, Schema ,SchemaFactory } from '@nestjs/mongoose';
import { Media, MediaSchema } from '../../Media/Model/media.schema'; 
import { Episode } from '../../Episode/Model/episode.schema'; 

@Schema()
export class Season extends Media {
  @Prop()
  genre: string;

  @Prop([{ type: String }])
  actors: string[];

  @Prop([{ type: Episode }])
  episodes: Episode[]; // Reference to the Episode schema
}

export const SeasonSchema = SchemaFactory.createForClass(Season);
