import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Media, Review } from '../Model/media.schema';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<Media>) {}

  async createMedia(mediaData: Partial<Media>): Promise<Media> {
    const newMedia = new this.mediaModel(mediaData);
    return newMedia.save();
  }

  async getAllMedia(): Promise<Media[]> {
    return this.mediaModel.find().exec();
  }

  async getMediaById(id: string): Promise<Media> {
    const media = await this.mediaModel.findById(id).exec();
    if (!media) {
      throw new NotFoundException('Media not found');
    }
    return media;
  }

  async updateMedia(id: string, mediaData: Partial<Media>): Promise<Media> {
    const updatedMedia = await this.mediaModel.findByIdAndUpdate(id, mediaData, { new: true }).exec();
    if (!updatedMedia) {
      throw new NotFoundException('Media not found');
    }
    return updatedMedia;
  }

  async deleteMedia(id: string): Promise<void> {
    const result = await this.mediaModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Media not found');
    }
  }

  async addReview(id: string, review: Review): Promise<Media> {
    const media = await this.mediaModel.findById(id).exec();
    if (!media) {
      throw new NotFoundException('Media not found');
    }
    
    media.reviews.push(review);
    return media.save();
  }
}
