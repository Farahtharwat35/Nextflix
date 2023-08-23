import { BadRequestException, Body, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../Model/account.schema';
import { ObjectId } from "bson"
import { User, UserDocument } from 'src/User/Model/user.schema';

@Injectable({})
export class AccountService {
  constructor(
    @InjectModel(Account.name) private readonly accountModel: Model<Account>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) { }

  async create(accountData: Account): Promise<AccountDocument> {
    const email = accountData.email
    const res = await this.accountModel.findOne({ "email": email })
    if (res == null) {
      const newAccount = await this.accountModel.create(accountData);
      return newAccount;
    }
  }

  async update(id: string, accountData: Account) {
    if (ObjectId.isValid(id)) {
      return this.accountModel.updateOne({ "_id": id }, accountData);
    } else {
      return "Invalid ID"
    }
  }
  async deleteAccount(id: string) {
    if (ObjectId.isValid(id)) {
      return this.accountModel.findByIdAndRemove(id).exec();
    } else {
      return "Invalid ID"
    }
  }
  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }
  async findOne(id: string): Promise<AccountDocument | undefined> {
    return this.accountModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<AccountDocument | undefined> {
    return this.accountModel.findOne({ email }).exec();
  }

  async findAccountUsers(id: string): Promise<UserDocument[] | undefined> {
    return await this.userModel.find({ account: id }).exec();
  }

  async createUser({ accountId, name }: { accountId: string; name: string }): Promise<{ error: boolean; info: string; }> {
    const acc = await this.accountModel.findById(accountId).exec();
    if (acc.users.length >= 5)
      return {
        error: true,
        info: "Max Users count exceeded"
      };
    const user = await this.userModel.create({
      account: acc._id,
      name
    });
    acc.users.push(user);
    acc.save();
    return {
      error: false,
      info: "User Added"
    }
  }
}
