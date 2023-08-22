import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movies } from '../Model/movie.schema';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movies.name) private moviesModel: Model<Movies>) { }

  async createMovie(movieData: Partial<Movies>): Promise<Movies> {
    const newMovie = new this.moviesModel(movieData);
    return newMovie.save();
  }

  async getAllMovies(): Promise<Movies[]> {
    return this.moviesModel.find().exec();
  }

  async getMovieById(id: string): Promise<Movies> {
    const movie = await this.moviesModel.findById(id).exec();
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  async getMediaId(id: string): Promise<Movies | null> {
    return await this.moviesModel.findById(id).exec();
  }

  async updateMovie(id: string, movieData: Partial<Movies>): Promise<Movies> {
    const updatedMovie = await this.moviesModel.findByIdAndUpdate(id, movieData, { new: true }).exec();
    if (!updatedMovie) {
      throw new NotFoundException('Movie not found');
    }
    return updatedMovie;
  }

  async deleteMovie(id: string): Promise<void> {
    const result = await this.moviesModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Movie not found');
    }
  }
}
