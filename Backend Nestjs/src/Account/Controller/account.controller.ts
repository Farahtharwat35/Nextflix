import { Controller, Post, Get, Body, UseGuards, Logger, Param } from '@nestjs/common';
import { Account } from '../Model/account.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 
import { AccountService } from './account.service';
@Controller('Accounts')
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  @Post()
  async createAccount(@Body() accountData: Account): Promise<Account> {
    return this.AccountService.create(accountData);
  }

  @Get()
  async getAllAccounts(): Promise<Account[]> {
    return this.AccountService.findAll();
  }

  @Post("update/:id")
  async updateUser(@Param('id') id: string, @Body() accountData: Account) {
    return this.AccountService.update(id, accountData)
  }

  @Post("delete/:id")
  async deleteUser(@Param('id') id: string) {
    return this.AccountService.deleteAccount(id)
  }
  
  @Get("/:id")
  async getUser(@Param('id') id: string) {
    const x = await this.AccountService.findOne(id);
    x.name = '';
    return x;
  }


}
