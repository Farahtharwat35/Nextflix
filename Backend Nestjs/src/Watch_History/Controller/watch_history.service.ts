import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountService } from 'src/Account/Controller/account.service';
import { EpisodeService } from 'src/Episode/Controller/episode.service';
import { MoviesService } from 'src/Movie/Controller/movie.service';
import { WatchHistory } from '../Model/watch_history.schema';
import { Model } from 'mongoose';

@Injectable()
export class WatchHistoryService {
	constructor(
		@InjectModel(WatchHistory.name) private readonly watchHistoryModel: Model<WatchHistory>,
		private readonly accountService: AccountService,
		private readonly episodeService: EpisodeService,
		private readonly movieService: MoviesService

	) { }

	async watch(userId: string, mediaId: string, accountId: string): Promise<{ error: boolean; info: string }> {
		const users = await this.accountService.findAccountUsers(accountId);
		const user = users.find(u => u._id.toString() === userId);
		if (!user) {
			return
		}
		const episode = await this.episodeService.getMediaId(mediaId);
		const movie = await this.movieService.getMediaId(mediaId);
		if (movie) {
			await this.watchHistoryModel.create({
				user,
				media: movie
			})
			return {
				error: false,
				info: "Entry created"
			};
		}
		else if (episode) {
			await this.watchHistoryModel.create({
				user,
				media: episode
			})
			return {
				error: false,
				info: "Entry created"
			};
		} else {
			return {
				error: true,
				info: "Cannot find Media"
			};
		}

	}
}
