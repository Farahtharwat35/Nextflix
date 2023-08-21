import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Media, MediaSchema } from './Model/media.schema';
import { MediaController } from '../Media/Controller/media.controller';
import { MediaService } from '../Media/Controller/media.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Media.name, schema: MediaSchema }])],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
