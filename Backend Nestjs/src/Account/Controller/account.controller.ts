import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { Account } from '../Model/account.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 
import { AccountService } from './account.service';

@Controller('Accounts')
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async createAccount(@Body() AccountData: Partial<Account>): Promise<Account> {
    return this.AccountService.create(AccountData);
  }

  @Get()
  @UseGuards(RolesGuard) 
  @Roles('Admin', 'Watcher') 
  async getAllAccounts(): Promise<Account[]> {
    return this.AccountService.findAll();
  }


}
