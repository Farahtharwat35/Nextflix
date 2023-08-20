import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { MediaService } from './media.service';
import { Media, Review } from '../Model/media.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async createMedia(@Body() mediaData: Partial<Media>): Promise<Media> {
    return this.mediaService.createMedia(mediaData);
  }

  @Get()
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getAllMedia(): Promise<Media[]> {
    return this.mediaService.getAllMedia();
  }

  @Get(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getMediaById(@Param('id') id: string): Promise<Media> {
    return this.mediaService.getMediaById(id);
  }

  @Put(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin')
  async updateMedia(@Param('id') id: string, @Body() mediaData: Partial<Media>): Promise<Media> {
    return this.mediaService.updateMedia(id, mediaData);
  }

  @Delete(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin')
  async deleteMedia(@Param('id') id: string): Promise<void> {
    return this.mediaService.deleteMedia(id);
  }

  @Post(':id/review')
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher')
  async addReview(@Param('id') id: string, @Body() review: Review): Promise<Media> {
    return this.mediaService.addReview(id, review);
  }
}
