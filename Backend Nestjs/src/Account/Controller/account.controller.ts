import { Controller, Post, Get, Body, UseGuards, Logger } from '@nestjs/common';
import { Account } from '../Model/account.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 
import { AccountService } from './account.service';
@Controller('Accounts')
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  @Post()
  async createAccount(@Body() accountData: Account): Promise<Account> {
    Logger.error("Hot reload")
    return this.AccountService.create(accountData);
  }

  @Get()
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getAllAccounts(): Promise<Account[]> {
    return this.AccountService.findAll();
  }


}
