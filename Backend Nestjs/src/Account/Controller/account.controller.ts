import { Controller, Post, Get, Body, UseGuards, Logger, Param, Request, BadRequestException } from '@nestjs/common';
import { Account } from '../Model/account.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator';
import { AccountService } from './account.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/User/Model/user.schema';

@Controller('Accounts')
export class AccountController {
  constructor(private readonly AccountService: AccountService) { }

  @Post()
  @UseGuards(RolesGuard)
  @Roles("Admin")
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
  @Roles("Watcher", "Admin")
  async updateUser(@Param('id') id: string, @Body() accountData: Account) {
    return this.AccountService.update(id, accountData)
  }

  @Post("delete/:id")
  @UseGuards(RolesGuard)
  @Roles("Admin")
  async deleteUser(@Param('id') id: string) {
    return this.AccountService.deleteAccount(id)
  }


  @Get("users")
  @UseGuards(RolesGuard, AuthGuard)
  @Roles('Admin', 'Watcher')
  async getAccountUsers(@Request() req): Promise<User[]> {
    return await this.AccountService.findAccountUsers(req.user.id);
  }

  @Post("users")
  @UseGuards(RolesGuard, AuthGuard)
  @Roles('Admin', 'Watcher')
  async addAccountUser(@Body() body: { name: string }, @Request() req): Promise<{ error: boolean; info: string }> {
    const res = await this.AccountService.createUser({
      accountId: req.user.id,
      name: body.name
    });
    if (res.error)
      throw new BadRequestException(res);

    return res;
  }
}
