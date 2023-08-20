import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movies, MoviesSchema } from '../Movie/Model/movie.schema';
import { MoviesController } from '../Movie/Controller/movie.controller';
import { MoviesService } from '../Movie/Controller/movie.service';
import { RolesGuard } from '../Middlewares/roles.guard'; 

@Module({
  imports: [MongooseModule.forFeature([{ name: Movies.name, schema: MoviesSchema }])],
  controllers: [MoviesController],
  providers: [MoviesService, RolesGuard],
})
export class MoviesModule {}
