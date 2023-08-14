import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { EpisodeService } from '../Controller/episode.service';
import { Episode } from '../Model/episode.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';

@Controller('episodes')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async createEpisode(@Body() episodeData: Partial<Episode>): Promise<Episode> {
    return this.episodeService.createEpisode(episodeData);
  }

  @Get()
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getAllEpisodes(): Promise<Episode[]> {
    return this.episodeService.findAllEpisodes();
  }


}
