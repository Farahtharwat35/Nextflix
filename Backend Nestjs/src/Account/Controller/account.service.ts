import { Body, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../Model/account.schema';
import {ObjectId} from "bson"
import { User } from 'src/User/Model/user.schema';
@Injectable({})
export class AccountService {
  constructor(@InjectModel(Account.name) private readonly AccountModel: Model<Account>, 
              @InjectModel(User.name) private readonly UserModel: Model<User>) {}

  async create(accountData: Account): Promise<Account> {
    const newAccount = await this.AccountModel.create(accountData);
    return newAccount;
  }
  
  async update(id: string, accountData: Account) {
    console.log("Data", accountData)
    if (ObjectId.isValid(id)) {
      return this.AccountModel.updateOne({ "_id": id }, accountData).exec();
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

  async findOne(id: string){
    const users = (await this.AccountModel.findById(id).exec()).users
    return this.AccountModel.findById(id).exec()
  }

}
