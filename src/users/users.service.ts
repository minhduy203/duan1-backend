import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(_id: string): Promise<User> {
    return this.usersRepository.findOne({ _id });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(
    full_name: string,
    email: string,
    password: string,
    role: string,
    address: string,
    phone_number: string,
    created_at: Date,
    avatar: string,
    isActive: boolean,
    birth_date: Date,
  ): Promise<User> {
    return this.usersRepository.create({
      full_name,
      email,
      password,
      role,
      address,
      phone_number,
      created_at: new Date(),
      avatar,
      isActive,
      birth_date
    });
  }

  async deleteUser(_id: string): Promise<User> {
    return this.usersRepository.delete({ _id });
  }

  async updateUser(_id: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ _id }, userUpdates);
  }
}
