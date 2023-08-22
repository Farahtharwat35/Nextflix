import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountService } from 'src/Account/Controller/account.service';
import { EpisodeService } from 'src/Episode/Controller/episode.service';
import { MoviesService } from 'src/Movie/Controller/movie.service';
import { WatchHistory } from '../Model/watch_history.schema';
import { Model } from 'mongoose';
import { Movies } from 'src/Movie/Model/movie.schema';

@Injectable()
export class WatchHistoryService {
	constructor(
		@InjectModel(WatchHistory.name) private readonly watchHistoryModel: Model<WatchHistory>,
		private readonly accountService: AccountService,
		private readonly episodeService: EpisodeService,
		private readonly movieService: MoviesService

	) { }

	async getTopFilms(limit: number): Promise<Movies[]> {
		const movies = await this.movieService.getAllMovies();

		const topFilmIds = movies.map(item => item._id);

		// Fetch the movies based on the top film IDs
		const topMovies = await this.movieService.getMoviesByIds(topFilmIds);

		return topMovies;
	}


	async getHistory(userId: string, accountId: string): Promise<{ date: Date; name: string }[]> {
		const users = await this.accountService.findAccountUsers(accountId);
		const user = users.find(u => {
			return u._id.toString() === userId
		});
		if (!user) {
			return
		}
		const data = await this.watchHistoryModel.find({ user: user._id }).exec();

		return data.map(wh => ({
			name: wh.media._id.toString(),
			date: wh.get("createdAt")
		}));
	}

	async watch(userId: string, mediaId: string, accountId: string): Promise<{ error: boolean; info: string }> {
		const users = await this.accountService.findAccountUsers(accountId);
		const user = users.find(u => u._id.toString() === userId);
		if (!user) {
			return
		}
		const episode = await this.episodeService.getMediaId(mediaId);
		const movie = await this.movieService.getMediaId(mediaId);
		if (movie) {
			movie.views++;
			await movie.save();
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
			episode.views++;
			await episode.save()
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
