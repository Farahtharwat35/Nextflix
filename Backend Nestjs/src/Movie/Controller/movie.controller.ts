import { Controller, Post, Get, Body, UseGuards, Param, Put, Delete } from '@nestjs/common';
import { MoviesService } from '../Controller/movie.service';
import { Movies} from '../Model/movie.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async createMovie(@Body() movieData: Partial<Movies>): Promise<Movies> {
    return this.moviesService.createMovie(movieData);
  }

  @Get()
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getAllMovies(): Promise<Movies[]> {
    return this.moviesService.getAllMovies();
  }

  @Get(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getMovieById(@Param('id') id: string): Promise<Movies> {
    return this.moviesService.getMovieById(id);
  }

  @Put(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin')
  async updateMovie(@Param('id') id: string, @Body() movieData: Partial<Movies>): Promise<Movies> {
    return this.moviesService.updateMovie(id, movieData);
  }

  @Delete(':id')
  @UseGuards(RolesGuard) 
  @Roles('Admin')
  async deleteMovie(@Param('id') id: string): Promise<void> {
    return this.moviesService.deleteMovie(id);
  }
}
