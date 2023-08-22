import { Body, Controller, Param, Post, UseGuards, Request, Get } from "@nestjs/common";
import { Roles } from "src/Middlewares/roles.decorator";
import { RolesGuard } from "src/Middlewares/roles.guard";
import { AuthGuard } from "src/auth/auth.guard";
import { WatchHistoryService } from "./watch_history.service";

@Controller('watch-history')
export class WatchHistoryController {
	constructor(
		private readonly watchHistoryService: WatchHistoryService
	) { }

	@Post(":id")
	@UseGuards(RolesGuard, AuthGuard)
	@Roles("Watcher")
	async AddWatchHistory(
		@Param('id') id: string,
		@Body() body: {
			userId: string
		},
		@Request() req
	): Promise<{
		error: boolean;
		info: string;
	}> {
		return this.watchHistoryService.watch(body.userId,
			id,
			req.user.id);
	}

	@Get()
	@UseGuards(RolesGuard, AuthGuard)
	@Roles("Watcher")
	async getUserWatchHistory(
		@Body() body: {
			userId: string
		},
		@Request() req
	): Promise<{
		date: Date;
		name: string;
	}[]> {
		return this.watchHistoryService.getHistory(body.userId, req.user.id);
	}
}
