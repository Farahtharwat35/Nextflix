import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from 'src/Account/Controller/account.service';
import { EpisodeService } from 'src/Episode/Controller/episode.service';
import { MoviesService } from 'src/Movie/Controller/movie.service';

@Injectable()
export class WatchHistoryService {
	constructor(
		private readonly accountService: AccountService,
		private readonly episodeService: EpisodeService,
		private readonly movieService: MoviesService
	) { }

	async watch(userId: string, mediaId: string, accountId: string): Promise<any> {
		const users = await this.accountService.findAccountUsers(accountId);
		const user = users.find(u => u._id.toString() === userId);
		if (!user) {
			return
		}
		const episode = await this.episodeService.getEpisodeById(mediaId);
		const movie = await this.movieService.getMovieById(mediaId);
		if (!movie) {
			console.log("It's an Episode")
			console.log(episode)
		} else if (!episode) {
			console.log("It's an Movie")
			console.log(movie)
		} else {
			console.log("it's not found")
		}

		return {};
	}
}
