import { Module } from '@nestjs/common';
import { WatchListController } from './Controller/watch-list.controller';
import { WatchListService } from './Controller/watch-list.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WatchList, WatchListSchema } from './Model/watch-list.schema';
import { MoviesModule } from 'src/Movie/movie.model';
import { AccountModule } from 'src/Account/account.module';
import { SeriesModule } from 'src/Series/series.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WatchList.name, schema: WatchListSchema }]),
    MoviesModule,
    AccountModule,
    SeriesModule
  ],
  controllers: [WatchListController],
  providers: [WatchListService],
  exports: [WatchListService]
})
export class WatchListModule { }
