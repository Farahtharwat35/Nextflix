import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { SeriesService } from "../Controller/series.service";
import { Series } from '../Model/series.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles('Admin', 'Watcher')
  async getSeriesById(@Param('id') id: string): Promise<Series> {
    return this.seriesService.getSeriesById(id);
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async createSeries(@Body() seriesData: Partial<Series>): Promise<Series> {
    return this.seriesService.createSeries(seriesData);
  }

  @Put(':id')
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async updateSeries(@Param('id') id: string, @Body() seriesData: Partial<Series>): Promise<Series> {
    return this.seriesService.updateSeries(id, seriesData);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async deleteSeries(@Param('id') id: string): Promise<void> {
    return this.seriesService.deleteSeries(id);
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('Admin', 'Watcher')
  async getAllSeries(): Promise<Series[]> {
    return this.seriesService.getAllSeries();
  }
}
