import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/User/user.module';
import { AccountModule } from 'src/Account/account.module';
import { EpisodeModule } from 'src/Episode/episode.module';
import { MoviesModule } from 'src/Movie/movie.model';
import { SeasonModule } from 'src/Season/season.module';
import { SeriesModule } from 'src/Series/series.module';
import { AuthModule } from 'src/auth/auth.module';
import { WatchHistoryModule } from 'src/Watch_History/watch_history.module';

@Module({
  //imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/nextflix')]
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nextflix'),
    //'mongodb+srv://nextflix:mongodb1234@cluster0.gbumfm1.mongodb.net/?retryWrites=true&w=majority'), // for my remote db (comment it and uncomment the above line)
    UserModule,
    AccountModule,
    EpisodeModule,
    MoviesModule,
    SeasonModule,
    SeriesModule,
    AuthModule,
    WatchHistoryModule
  ]
})
export class AppModule { }
