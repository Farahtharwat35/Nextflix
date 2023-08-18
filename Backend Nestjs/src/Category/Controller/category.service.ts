import { Body, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from '../Model/category.schema';
@Injectable({})
export class CategoryService {
  constructor(@InjectModel(Category.name) private readonly CategoryModel: Model<Category>) {}

  async create(CategoryData: Category): Promise<Category> {
    Logger.log("Reload 2")
    const newCategory = await this.CategoryModel.create(CategoryData);
    return newCategory;
  }
  async remove(id: string): Promise<Category | null> {
    return this.CategoryModel.findByIdAndRemove(id).exec();
  }
  async findAll(): Promise<Category[]> {
    return this.CategoryModel.find().exec();
  }

}
