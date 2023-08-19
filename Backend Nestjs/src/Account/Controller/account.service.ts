import { Body, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../Model/account.schema';
import {ObjectId} from "bson"
@Injectable({})
export class AccountService {
  constructor(@InjectModel(Account.name) private readonly AccountModel: Model<Account>) {}

  async create(accountData: Account): Promise<Account> {
    const newAccount = await this.AccountModel.create(accountData);
    return newAccount;
  }
  
  async update(id: string, accountData: Account) {
    if (ObjectId.isValid(id)) {
      return this.AccountModel.updateOne({ "_id": id }, accountData);
    } else {
      return "Invalid ID"
    }
  }
  async deleteAccount(id: string) {
    if (ObjectId.isValid(id)) {
      return this.AccountModel.findByIdAndRemove(id).exec();
    } else {
      return "Invalid ID"
    }
  }
  async findAll(): Promise<Account[]> {
    return this.AccountModel.find().exec();
  }

}
