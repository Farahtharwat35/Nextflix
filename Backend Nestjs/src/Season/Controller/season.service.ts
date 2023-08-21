import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Season } from '../Model/season.schema';

@Injectable()
export class SeasonService {
  constructor(@InjectModel(Season.name) private seasonModel: Model<Season>) {}

  async getSeasonById(id: string): Promise<Season> {
    const season = await this.seasonModel.findById(id).exec();
    if (!season) {
      throw new NotFoundException('Season not found');
    }
    return season;
  }

  async createSeason(seasonData: Partial<Season>): Promise<Season> {
    const newSeason = new this.seasonModel(seasonData);
    return newSeason.save();
  }

  async updateSeason(id: string, seasonData: Partial<Season>): Promise<Season> {
    const updatedSeason = await this.seasonModel
      .findByIdAndUpdate(id, seasonData, { new: true })
      .exec();
    if (!updatedSeason) {
      throw new NotFoundException('Season not found');
    }
    return updatedSeason;
  }

  async deleteSeason(id: string): Promise<void> {
    const result = await this.seasonModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Season not found');
    }
  }
  
  async getAllSeasons(): Promise<Season[]> {
    return this.seasonModel.find().exec();
  }
}
