import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Series } from '../Model/series.schema';

@Injectable()
export class SeriesService {
  constructor(@InjectModel(Series.name) private seriesModel: Model<Series>) { }

  async createSeries(seriesData: Partial<Series>): Promise<Series> {
    return this.seriesModel.create(seriesData);
  }

  async getAllSeries(): Promise<Series[]> {
    return this.seriesModel.find().populate('seasons').exec();
  }

  async getSeriesById(id: string): Promise<Series> {
    const series = await this.seriesModel.findById(id).populate('seasons').exec();
    if (!series) {
      throw new NotFoundException('Series not found');
    }
    return series;
  }

  async getSeriesMediaById(id: string): Promise<Series | null> {
    const series = await this.seriesModel.findById(id).populate('seasons').exec();
    return series;
  }

  async updateSeries(id: string, seriesData: Partial<Series>): Promise<Series> {
    const updatedSeries = await this.seriesModel
      .findByIdAndUpdate(id, seriesData, { new: true })
      .populate('seasons')
      .exec();
    if (!updatedSeries) {
      throw new NotFoundException('Series not found');
    }
    return updatedSeries;
  }

  async deleteSeries(id: string): Promise<void> {
    const result = await this.seriesModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Series not found');
    }
  }
}
