import { Body, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../Model/account.schema';
@Injectable({})
export class AccountService {
  constructor(@InjectModel(Account.name) private readonly AccountModel: Model<Account>) {}

  async create(accountData: Account): Promise<Account> {
    Logger.log("Reload 2")
    const newAccount = await this.AccountModel.create(accountData);
    return newAccount;
  }
  async remove(id: string): Promise<Account | null> {
    return this.AccountModel.findByIdAndRemove(id).exec();
  }
  async findAll(): Promise<Account[]> {
    return this.AccountModel.find().exec();
  }

}
