import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../Model/user.schema';

@Injectable({})
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(@Body() userData: Partial<User>): Promise<User> {
    const newUser = new this.userModel(userData);
    return newUser.save();
  }
  async remove(id: string): Promise<User | null> {
    return this.userModel.findByIdAndRemove(id).exec();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

}
