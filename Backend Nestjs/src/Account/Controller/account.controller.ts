import { Controller, Post, Get, Body, UseGuards, Logger, Param } from '@nestjs/common';
import { Account } from '../Model/account.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator';
import { AccountService } from './account.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

@Controller('Accounts')
export class AccountController {
  constructor(private readonly AccountService: AccountService) { }

  @Post()
  // @UseGuards(RolesGuard) 
  // @Roles("Watcher","Admin")
  async createAccount(@Body() accountData: Account): Promise<Account> {
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
}
