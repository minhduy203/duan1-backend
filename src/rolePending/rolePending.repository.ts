import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { RolePending, RolePendingDocument } from './schemas/rolePending.schema';

@Injectable()
export class RolePendingRepository {
  constructor(
    @InjectModel(RolePending.name)
    private rolePendingModel: Model<RolePendingDocument>,
  ) {}

  async findOne(
    rolePendingFilterQuery: FilterQuery<RolePending>,
  ): Promise<RolePending> {
    return this.rolePendingModel.findOne(rolePendingFilterQuery);
  }

  async find(
    rolePendingFilterQuery: FilterQuery<RolePending>,
  ): Promise<RolePending[]> {
    return this.rolePendingModel.find(rolePendingFilterQuery);
  }

  async create(rolePending: RolePending): Promise<RolePending> {
    const newRole = new this.rolePendingModel(rolePending);
    return newRole.save();
  }

  async deleteOne(
    rolePendingFilterQuery: FilterQuery<RolePending>,
  ): Promise<RolePending> {
    return this.rolePendingModel.deleteOne(rolePendingFilterQuery);
  }

  async findOneAndUpdate(
    rolePendingFilterQuery: FilterQuery<RolePending>,
    rolePending: Partial<RolePending>,
  ): Promise<RolePending> {
    return this.rolePendingModel.findOneAndUpdate(
      rolePendingFilterQuery,
      rolePending,
      {
        new: true,
        useFindAndModify: false,
      },
    );
  }
}
