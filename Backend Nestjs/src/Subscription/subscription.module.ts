import { Module } from "@nestjs/common";
import { SubscriptionController } from "./Controller/subscription.controller";
import { SubscriptionService } from "./Controller/subscription.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Subscription, SubscriptionSchema } from "./Model/subscription.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Subscription.name, schema: SubscriptionSchema}])
    ],
    controllers: [SubscriptionController],
    providers: [SubscriptionService]
})
export class SubscriptionModule {}