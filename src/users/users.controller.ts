import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':_id')
  async getUser(@Param('_id') _id: string): Promise<User> {
    return this.usersService.getUserById(_id);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(
      createUserDto.full_name,
      createUserDto.email,
      createUserDto.password,
      createUserDto.role,
      createUserDto.address,
      createUserDto.phone_number,
      createUserDto.created_at,
      createUserDto.avatar,
      createUserDto.isActive,
      createUserDto.birth_date,
    );
  }

  @Delete(':_id')
  async deleteUser(@Param('_id') _id: string): Promise<User> {
    return this.usersService.deleteUser(_id);
  }

  @Patch(':_id')
  async updateUser(
    @Param('_id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<User> {
    return this.usersService.login(loginUserDto);
  }
  @Post('/register')
  async register(@Body() loginUserDto: LoginUserDto): Promise<User> {
    return this.usersService.register(loginUserDto);
  }
}
