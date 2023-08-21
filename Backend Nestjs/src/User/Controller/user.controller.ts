import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { User } from '../Model/user.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator';
import { UserService } from './user.service';

@Controller('Users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @UseGuards(RolesGuard)
  @Roles('Admin')
  async createUser(@Body() userData: User): Promise<User> {
    return this.userService.create(userData);
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('Admin', 'Watcher')
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
