import { Body, Controller, Param, Post, UseGuards, Request, Get } from '@nestjs/common';
import { Roles } from 'src/Middlewares/roles.decorator';
import { RolesGuard } from 'src/Middlewares/roles.guard';
import { AuthGuard } from 'src/auth/auth.guard';
import { WatchListService } from './watch-list.service';

@Controller('watch-list')
export class WatchListController {
	constructor(
		private readonly watchListService: WatchListService,
	) { }

	@Post(":id")
	@UseGuards(RolesGuard, AuthGuard)
	@Roles("Admin", "Watcher")
	async addToWatchList(@Param('id') id: string, @Body() body: { userId: string }, @Request() req): Promise<{
		error: boolean;
		info: string;
	}> {
		return this.watchListService.addToList(body.userId,
			id,
			req.user.id);
	}

	@Get()
	@UseGuards(RolesGuard, AuthGuard)
	@Roles("Watcher")
	async getWatchList(
		@Body() body: {
			userId: string
		},
		@Request() req
	): Promise<{
		name: string;
	}[]> {
		return this.watchListService.getList(body.userId, req.user.id);
	}
}
