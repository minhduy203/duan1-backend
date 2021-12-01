import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRolePendingDto } from './dto/create-rolePending.dto';
import { UpdateRolePendingDto } from './dto/update-rolePending.dto';

import { RolePending } from './schemas/rolePending.schema';
import { RolePendingService } from './rolePending.service';

@Controller('RolePending')
export class RolePendingController {
  constructor(private readonly rolePendingService: RolePendingService) {}

  @Get(':_id')
  async getRolePending(@Param('_id') _id: string): Promise<RolePending> {
    return this.rolePendingService.getRolePendingById(_id);
  }

  @Get()
  async getRolePendings(): Promise<RolePending[]> {
    return this.rolePendingService.getRolePendings();
  }

  @Post()
  async createRolePending(
    @Body() createRolePendingDto: CreateRolePendingDto,
  ): Promise<RolePending> {
    return this.rolePendingService.createRolePending(
      createRolePendingDto.id_user,
      createRolePendingDto.required_role,
    );
  }

  @Patch(':_id')
  async updateRolePending(
    @Param('_id') rolePendingId: string,
    @Body() updateRolePendingDto: UpdateRolePendingDto,
  ): Promise<RolePending> {
    return this.rolePendingService.updateRolePending(
      rolePendingId,
      updateRolePendingDto,
    );
  }
}
