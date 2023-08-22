import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WatchList } from '../Model/watch-list.schema';
import { Model } from 'mongoose';
import { AccountService } from 'src/Account/Controller/account.service';
import { MoviesService } from 'src/Movie/Controller/movie.service';
import { SeriesService } from 'src/Series/Controller/series.service';

@Injectable()
export class WatchListService {
	constructor(
		@InjectModel(WatchList.name) private readonly watchListModel: Model<WatchList>,
		private readonly accountService: AccountService,
		private readonly seriesService: SeriesService,
		private readonly movieService: MoviesService
	) { }

	async addToList(userId: string, mediaId: string,
		accountId: string): Promise<{
			error: boolean;
			info: string;
		}> {
		const users = await this.accountService.findAccountUsers(accountId);
		const user = users.find(u => u._id.toString() === userId);

		if (!user) {
			return
		}

		const series = await this.seriesService.getSeriesMediaById(mediaId);
		const movie = await this.movieService.getMediaId(mediaId);
		if (movie) {
			await this.watchListModel.create({
				user,
				media: movie
			})
			return {
				error: false,
				info: "Movie added to watch list"
			};
		}
		else if (series) {
			await this.watchListModel.create({
				user,
				media: series
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
