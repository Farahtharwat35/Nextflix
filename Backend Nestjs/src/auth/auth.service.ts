import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from 'src/Account/Controller/account.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(private accountService: AccountService,
		private jwtService: JwtService) { }

	async signIn(email: string, pass: string): Promise<any> {
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
	}): Promise<any> {
		const account = await this.accountService.create({
			email,
			password,
			name,
			phoneNo,
			subscription,
			users: []
		});

		const payload = { sub: account._id, username: account.name };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
