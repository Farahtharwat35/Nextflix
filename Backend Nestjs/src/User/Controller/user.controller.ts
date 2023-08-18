import { Controller, Post, Get, Body, UseGuards, Param } from '@nestjs/common';
import { User } from '../Model/user.schema';
import { RolesGuard } from '../../Middlewares/roles.guard';
import { Roles } from '../../Middlewares/roles.decorator'; 
import { UserService } from './user.service';

@Controller('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: User): Promise<User> {
    return this.userService.create(userData);
  }

  @Post("update/:id")
  async updateUser(@Param('id') id: string, @Body() userdata: User) {
    return this.userService.update(id, userdata)
  }

  @Post("delete/:id")
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id)
  }
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }


}
