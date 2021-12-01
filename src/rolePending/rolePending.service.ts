import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateRolePendingDto } from './dto/update-rolePending.dto';

import { RolePending } from './schemas/rolePending.schema';
import { RolePendingRepository } from './rolePending.repository';

@Injectable()
export class RolePendingService {
  constructor(private readonly rolePendingRepository: RolePendingRepository) {}

  async getRolePendingById(_id: string): Promise<RolePending> {
    return this.rolePendingRepository.findOne({ _id });
  }

  async getRolePendings(): Promise<RolePending[]> {
    return this.rolePendingRepository.find({});
  }

  async createRolePending(
    id_user: string,
    required_role: number,
  ): Promise<RolePending> {
    return this.rolePendingRepository.create({
      id_user,
      required_role,
    });
  }

  async deleteRolePending(_id: string): Promise<RolePending> {
    return this.rolePendingRepository.deleteOne({ _id });
  }

  async updateRolePending(
    _id: string,
    rolePendingUpdates: UpdateRolePendingDto,
  ): Promise<RolePending> {
    return this.rolePendingRepository.findOneAndUpdate(
      { _id },
      rolePendingUpdates,
    );
  }
}
