import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import {  Post, Body, Put, Delete } from '@nestjs/common';
import { SeasonService } from '../Controller/season.service';
import { Season } from '../Model/season.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator';

@Controller('seasons')
export class SeasonController {
  constructor(private readonly seasonService: SeasonService) {}

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles('Admin', 'Watcher')
  async getSeasonById(@Param('id') id: string): Promise<Season> {
    return this.seasonService.getSeasonById(id);
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async createSeason(@Body() seasonData: Partial<Season>): Promise<Season> {
    return this.seasonService.createSeason(seasonData);
  }

  @Put(':id')
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async updateSeason(@Param('id') id: string, @Body() seasonData: Partial<Season>): Promise<Season> {
    return this.seasonService.updateSeason(id, seasonData);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async deleteSeason(@Param('id') id: string): Promise<void> {
    return this.seasonService.deleteSeason(id);
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('Admin', 'Watcher')
  async getAllSeasons(): Promise<Season[]> {
    return this.seasonService.getAllSeasons();
  }
}





