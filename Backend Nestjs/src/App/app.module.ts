import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from 'src/Account/account.module';
import { SubscriptionModule } from 'src/Subscription/subscription.module';
import { CategoryModule } from 'src/Category/category.module';
import { UserModule } from 'src/User/user.module';
import { EpisodeModule } from 'src/Episode/episode.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/nextflix')
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://192.168.146.14:27017/nextflix'),
      'mongodb+srv://nextflix:mongodb1234@cluster0.gbumfm1.mongodb.net/?retryWrites=true&w=majority'), // for my remote db (comment it and uncomment the above line)
    UserModule, 
    AccountModule,
    SubscriptionModule,
    CategoryModule,
    EpisodeModule
  ]
})
export class AppModule { }
