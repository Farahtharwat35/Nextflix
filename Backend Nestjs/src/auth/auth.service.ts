import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from 'src/Account/Controller/account.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/Account/Controller/interface/jwtPayload.interface';

@Injectable()
export class AuthService {
	constructor(private accountService: AccountService,
		private jwtService: JwtService) { }

	async signIn(email: string, pass: string): Promise<{ access_token: string }> {
		const account = await this.accountService.findOneByEmail(email);

		if (account === null || account.password !== pass) {
			throw new UnauthorizedException();
		}
		const payload = { sub: account._id, username: account.name };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}

	async signUp({ email, name, password, phoneNo, subscription }: {
		email: string;
		password: string;
		name: string;
		phoneNo: string;
		subscription: "Normal" | "Platinum";
	}): Promise<{ access_token: string }> {
		const account = await this.accountService.create({
			email,
			password,
			name,
			phoneNo,
			subscription,
			users: [],
			type: "Watcher"
		});

		const payload: JwtPayload = {
			id: account._id, username: account.name, email: account.email,
			type: account.type
		};
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
