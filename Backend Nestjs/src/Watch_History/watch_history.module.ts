import { Module } from '@nestjs/common';
import { AccountModule } from 'src/Account/account.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/User/user.module';
import { EpisodeModule } from 'src/Episode/episode.module';
import { AccountService } from 'src/Account/Controller/account.service';
import { UserService } from 'src/User/Controller/user.service';
import { WatchHistoryController } from './Controller/watch_history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/Account/Model/account.schema';
import { User, UserSchema } from 'src/User/Model/user.schema';
import { WatchHistoryService } from './Controller/watch_history.service';
import { WatchHistory, WatchHistorySchema } from './Model/watch_history.schema';
import { MoviesModule } from 'src/Movie/movie.model';
import { MoviesService } from 'src/Movie/Controller/movie.service';
import { EpisodeService } from 'src/Episode/Controller/episode.service';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: WatchHistory.name, schema: WatchHistorySchema }]),
		AccountModule,
		UserModule,
		EpisodeModule,
		MoviesModule
	],
	providers: [AccountService, UserService, MoviesService, EpisodeService],
	controllers: [WatchHistoryController],
	exports: [AccountModule],
})
export class WatchHistoryModule { }
