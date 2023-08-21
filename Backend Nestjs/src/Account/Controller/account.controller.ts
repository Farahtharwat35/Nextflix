import { Controller, Post, Get, Body, UseGuards, Logger,Param } from '@nestjs/common';
import { Account } from '../Model/account.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 
import { AccountService } from './account.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

@Controller('Accounts')
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  @Post('login') // New route for login
  async login(@Body() credentials: { email: string; password: string }) {
    const account = await this.AccountService.findByEmail(credentials.email);

    if (account && account.password === credentials.password) {
      const payload = { email: account.email, sub: account._id };
      const token = this.jwtService.sign(payload);
      return { access_token: token };
    }

    throw new UnauthorizedException('Invalid credentials');
  }
  @Post()
  // @UseGuards(RolesGuard) 
  // @Roles("Watcher","Admin")
  async createAccount(@Body() accountData: Account): Promise<Account> {
    Logger.error("Hot reload")
    return this.AccountService.create(accountData);
  }

  @Get()
  @UseGuards(RolesGuard) 
  @Roles("Admin")
  async getAllAccounts(): Promise<Account[]> {
    return this.AccountService.findAll();
  }

  @Post("update/:id")
  @UseGuards(RolesGuard) 
  @Roles("Watcher","Admin")
  async updateUser(@Param('id') id: string, @Body() accountData: Account) {
    return this.AccountService.update(id, accountData)
  }

  @Post("delete/:id")
  @UseGuards(RolesGuard) 
  @Roles("Admin")
  async deleteUser(@Param('id') id: string) {
    return this.AccountService.deleteAccount(id)
  }

}
