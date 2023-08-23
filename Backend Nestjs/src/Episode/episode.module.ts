import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Episode, EpisodeSchema } from './Model/episode.schema';
import { EpisodeController } from './Controller/episode.controller';
import { EpisodeService } from '../Episode/Controller/episode.service';
import { RolesGuard } from '../Middlewares/roles.guard';


@Module({
  imports: [MongooseModule.forFeature([{ name: Episode.name, schema: EpisodeSchema }])],
  controllers: [EpisodeController],
  providers: [EpisodeService, RolesGuard],
  exports: [EpisodeService]
})
export class EpisodeModule { }
