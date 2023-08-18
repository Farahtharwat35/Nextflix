import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Episode } from '../Model/episode.schema';

@Injectable()
export class EpisodeService {
  constructor(@InjectModel(Episode.name) private episodeModel: Model<Episode>) {}

  async createEpisode(episodeData: Partial<Episode>): Promise<Episode> {
    const newEpisode = new this.episodeModel(episodeData);
    return newEpisode.save();
  }

  async getAllEpisodes(): Promise<Episode[]> {
    return this.episodeModel.find().exec();
  }

  async getEpisodeById(id: string): Promise<Episode> {
    const episode = await this.episodeModel.findById(id).exec();
    if (!episode) {
      throw new NotFoundException('Episode not found');
    }
    return episode;
  }

  async updateEpisode(id: string, episodeData: Partial<Episode>): Promise<Episode> {
    const updatedEpisode = await this.episodeModel.findByIdAndUpdate(id, episodeData, { new: true }).exec();
    if (!updatedEpisode) {
      throw new NotFoundException('Episode not found');
    }
    return updatedEpisode;
  }

  async deleteEpisode(id: string): Promise<void> {
    const result = await this.episodeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Episode not found');
    }
  }
}
