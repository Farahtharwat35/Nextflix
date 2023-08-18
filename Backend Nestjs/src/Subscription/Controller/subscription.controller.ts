import { Controller, Post, Get, Body, UseGuards, Logger } from '@nestjs/common';
import { Subscription } from '../Model/subscription.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 
import { SubscriptionService } from './subscription.service';
@Controller('Subscriptions')
export class SubscriptionController {
  constructor(private readonly SubscriptionService: SubscriptionService) {}

  @Post()
  async createSubscription(@Body() SubscriptionData: Subscription): Promise<Subscription> {
    Logger.error("Hot reload")
    return this.SubscriptionService.create(SubscriptionData);
  }

  @Get()
  async getAllSubscriptions(): Promise<Subscription[]> {
    return this.SubscriptionService.findAll();
  }


}
