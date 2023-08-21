import { Body, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../Model/account.schema';
import { ObjectId } from "bson"
import { User, UserDocument } from 'src/User/Model/user.schema';

@Injectable({})
export class AccountService {
  constructor(
    @InjectModel(Account.name) private readonly AccountModel: Model<Account>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) { }

  async create(accountData: Account): Promise<AccountDocument> {
    const newAccount = await this.AccountModel.create(accountData);
    // newAccount['token'] = this.jwtService.sign({ id: newAccount.id, email: newAccount.email, type: newAccount.type });
    // console.log("//////////////////////////////////////////////////Test Token:", newAccount)
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
  async findOne(id: string): Promise<AccountDocument | undefined> {
    return this.AccountModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<AccountDocument | undefined> {
    return this.AccountModel.findOne({ email }).exec();
  }

  async findAccountUsers(id: string): Promise<UserDocument[] | undefined> {
    return await this.userModel.find({ account: id }).exec();
  }
}