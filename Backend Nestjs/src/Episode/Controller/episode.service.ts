import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Episode } from '../Model/episode.schema';

@Injectable()
export class EpisodeService {
  constructor(
    @InjectModel(Episode.name) private episodeModel: Model<Episode>,
  ) {}

  async createEpisode(episodeData: Partial<Episode>): Promise<Episode> {
    const createdEpisode = new this.episodeModel(episodeData);
    return createdEpisode.save();
  }

  async findAllEpisodes(): Promise<Episode[]> {
    return this.episodeModel.find().exec();
  }

}
