import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { Episode } from '../Model/episode.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 

@Controller('episodes')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) {}

  @Post()
  // @UseGuards(RolesGuard)
  // @Roles('Admin')
  async createEpisode(@Body() episodeData: Partial<Episode>): Promise<Episode> {
    return this.episodeService.createEpisode(episodeData);
  }

  @Get()
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getAllEpisodes(): Promise<Episode[]> {
    return this.episodeService.getAllEpisodes();
  }

  @Get(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getEpisodeById(@Param('id') id: string): Promise<Episode> {
    return this.episodeService.getEpisodeById(id);
  }

  @Put(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin')
  async updateEpisode(@Param('id') id: string, @Body() episodeData: Partial<Episode>): Promise<Episode> {
    return this.episodeService.updateEpisode(id, episodeData);
  }

  @Delete(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin')
  async deleteEpisode(@Param('id') id: string): Promise<void> {
    return this.episodeService.deleteEpisode(id);
  }

  @Get('EpisodeId/:id') 
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getSpecificEpisode(@Param('id') id: string): Promise<Episode> {
    return this.episodeService.getSpecificEpisodeID(id);
  }
}
