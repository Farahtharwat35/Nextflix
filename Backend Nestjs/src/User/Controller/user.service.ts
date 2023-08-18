import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../Model/user.schema';
import { ObjectId } from 'bson';

@Injectable({})
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

  async create(userData: User): Promise<User> {
    const newUser = await this.userModel.create(userData);
    return newUser.save();
  }
  async update(id: string, userData: User) {
    if (ObjectId.isValid(id)) {
      return this.userModel.updateOne({ "_id": id }, userData);
    } else {
      return "Invalid ID"
    }
  }
  async deleteUser(id: string) {
    if (ObjectId.isValid(id)) {
      return this.userModel.findByIdAndRemove(id).exec();
    } else {
      return "Invalid ID"
    }
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

}
