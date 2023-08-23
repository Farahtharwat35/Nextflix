import { Module } from '@nestjs/common';
import { AccountModule } from 'src/Account/account.module';
import { EpisodeModule } from 'src/Episode/episode.module';
import { WatchHistoryController } from './Controller/watch_history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WatchHistoryService } from './Controller/watch_history.service';
import { WatchHistory, WatchHistorySchema } from './Model/watch_history.schema';
import { MoviesModule } from 'src/Movie/movie.model';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: WatchHistory.name, schema: WatchHistorySchema }]),
		AccountModule,
		EpisodeModule,
		MoviesModule
	],
	providers: [WatchHistoryService],
	controllers: [WatchHistoryController],
	exports: [WatchHistoryService],
})
export class WatchHistoryModule { }
