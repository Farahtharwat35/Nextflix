import { Body, Controller, Post, HttpCode, HttpStatus, Request, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) { }

	@HttpCode(HttpStatus.OK)
	@Post('login')
	signIn(@Body() req: {
		email: string;
		password: string;
	}) {
		return this.authService.signIn(req.email, req.password);
	}

	@HttpCode(HttpStatus.OK)
	@Post('sign-up')
	signUp(@Body() req: {
		email: string;
		password: string;
		name: string;
		phoneNo: string;
		subscription: "Normal" | "Platinum";
	}) {
		return this.authService.signUp({
			email: req.email,
			name: req.name,
			password: req.password,
			phoneNo: req.phoneNo,
			subscription: req.subscription
		});
	}

	@UseGuards(AuthGuard)
	@Get('about-me')
	aboutMe(@Request() req) {
		return req.user.id;
	}
}