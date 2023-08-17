import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../Model/account.schema';

@Injectable({})
export class AccountService {
  constructor(@InjectModel(Account.name) private AccountModel: Model<AccountDocument>) {}

  async create(@Body() AccountData: Partial<Account>): Promise<Account> {
    const newAccount = new this.AccountModel(AccountData);
    return newAccount.save();
  }
  async remove(id: string): Promise<Account | null> {
    return this.AccountModel.findByIdAndRemove(id).exec();
  }
  async findAll(): Promise<Account[]> {
    return this.AccountModel.find().exec();
  }

}
