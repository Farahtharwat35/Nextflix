import { Controller, Post, Get, Body, UseGuards, Logger } from '@nestjs/common';
import { Category } from '../Model/category.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 
import { CategoryService } from './category.service';
@Controller('Categories')
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() CategoryData: Category): Promise<Category> {
    return this.CategoryService.create(CategoryData);
  }

  @Get()
  async getAllCategorys(): Promise<Category[]> {
    return this.CategoryService.findAll();
  }


}
