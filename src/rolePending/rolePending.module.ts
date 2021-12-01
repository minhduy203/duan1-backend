import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolePending, RolePendingSchema } from './schemas/rolePending.schema';
import { RolePendingController } from './rolePending.controller';
import { RolePendingRepository } from './rolePending.repository';
import { RolePendingService } from './rolePending.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RolePending.name, schema: RolePendingSchema },
    ]),
  ],
  controllers: [RolePendingController],
  providers: [RolePendingService, RolePendingRepository],
})
export class RolePendingModule {}
