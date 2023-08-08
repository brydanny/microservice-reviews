import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './application/commands/handlers';
import { QueryHandlers } from './application/queries/handlers';
import { ReviewController } from './api/review.controller';
import { PropertyController } from './api/property.controller';
import { HuespedController } from './api/huesped.controller';
import { HostController } from './api/host.controller';
import { ReviewRepository } from './infrastructure/repository/review.repository';
import { PropertyRepository } from './infrastructure/repository/property.repository';
import { HuespedRepository } from './infrastructure/repository/huesped.repository';
import { HostRepository } from './infrastructure/repository/host.repository';

import {
  ReviewModelSchema,
  ReviewSchema,
} from './infrastructure/schemas/review.schema';
import {
  PropertyModelSchema,
  PropertySchema,
} from './infrastructure/schemas/property.schema';
import {
  HuespedModelSchema,
  HuespedSchema,
} from './infrastructure/schemas/huesped.schema';
import {
  HostModelSchema,
  HostSchema,
} from './infrastructure/schemas/host.schema';

import { PropertyMapper } from './infrastructure/mapper/property.mapper';
import { PropertyFactory } from './domain/factories/property.factory';
import { HuespedMapper } from './infrastructure/mapper/huesped.mapper';
import { HuespedFactory } from './domain/factories/huesped.factory';
import { ReviewMapper } from './infrastructure/mapper/review.mapper';
import { ReviewFactory } from './domain/factories/review.factory';
import { HostMapper } from './infrastructure/mapper/host.mapper';
import { HostFactory } from './domain/factories/host.factory';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: ReviewModelSchema.name,
        schema: ReviewSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: PropertyModelSchema.name,
        schema: PropertySchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: HuespedModelSchema.name,
        schema: HuespedSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: HostModelSchema.name,
        schema: HostSchema,
      },
    ]),
  ],
  controllers: [
    ReviewController,
    PropertyController,
    HuespedController,
    HostController,
  ],
  providers: [
    ReviewRepository,
    PropertyRepository,
    HuespedRepository,
    HostRepository,
    ...CommandHandlers,
    ...QueryHandlers,
    PropertyMapper,
    PropertyFactory,
    HuespedMapper,
    HuespedFactory,
    ReviewMapper,
    ReviewFactory,
    HostMapper,
    HostFactory,
  ],
})
export class ReviewsModule {}
