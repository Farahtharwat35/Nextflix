import { Body, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription, SubscriptionDocument } from '../Model/subscription.schema';
@Injectable({})
export class SubscriptionService {
  constructor(@InjectModel(Subscription.name) private readonly SubscriptionModel: Model<Subscription>) {}

  async create(SubscriptionData: Subscription): Promise<Subscription> {
    Logger.log("Reload 2")
    const newSubscription = await this.SubscriptionModel.create(SubscriptionData);
    return newSubscription;
  }
  async remove(id: string): Promise<Subscription | null> {
    return this.SubscriptionModel.findByIdAndRemove(id).exec();
  }
  async findAll(): Promise<Subscription[]> {
    return this.SubscriptionModel.find().exec();
  }

}
