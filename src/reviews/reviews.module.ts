import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './application/commands/handlers';
import { QueryHandlers } from './application/queries/handlers';
import { ReviewController } from './api/review.controller';
import { PropertyController } from './api/property.controller';
import { HuespedController } from './api/huesped.controller';
import { HostController } from './api/host.controller';
import { ReviewGuestController } from './api/review-guest.controller';
import { ReviewRepository } from './infrastructure/repository/review.repository';
import { PropertyRepository } from './infrastructure/repository/property.repository';
import { HuespedRepository } from './infrastructure/repository/huesped.repository';
import { HostRepository } from './infrastructure/repository/host.repository';
import { ReviewGuestRepository } from './infrastructure/repository/review-guest.repository';

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
import {
  ReviewGuestModelSchema,
  ReviewGuestSchema,
} from './infrastructure/schemas/review-guest.schema';

import { PropertyMapper } from './infrastructure/mapper/property.mapper';
import { PropertyFactory } from './domain/factories/property.factory';
import { HuespedMapper } from './infrastructure/mapper/huesped.mapper';
import { HuespedFactory } from './domain/factories/huesped.factory';
import { ReviewMapper } from './infrastructure/mapper/review.mapper';
import { ReviewFactory } from './domain/factories/review.factory';
import { HostMapper } from './infrastructure/mapper/host.mapper';
import { HostFactory } from './domain/factories/host.factory';
import { ReviewGuestMapper } from './infrastructure/mapper/review-guest.mapper';
import { ReviewGuestFactory } from './domain/factories/review-guest.factory';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { HostService } from './api/host-event/host.service';
import { environments } from '../environments';
import { PropertyService } from './api/property-event/property.service';
import { GuestService } from './api/guest-event/guest.service';
//console.log('process.env.URL_RABBIT', process.env.URL_RABBIT);
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
    MongooseModule.forFeature([
      {
        name: ReviewGuestModelSchema.name,
        schema: ReviewGuestSchema,
      },
    ]),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'property-service:property-created',
          type: 'fanout',
        },
        {
          name: 'user-service:guest-created',
          type: 'fanout',
        },
        {
          name: 'user-service:host-created',
          type: 'fanout',
        },
        {
          name: 'booking-service:reserva-creada',
          type: 'fanout',
        },
      ],
      // uri: 'amqps://farhdenj:BilLhsNpcQHME1p2ItwtM5sZImZaqmDC@shrimp.rmq.cloudamqp.com/farhdenj',
      uri: process.env.URL_RABBIT || 'amqp://3.131.89.227:5672',
      //uri: 'amqp://localhost',
      //uri: environments[process.env.URL_RABBIT] || 'amqp://localhost',
    }),
  ],
  controllers: [
    ReviewController,
    PropertyController,
    HuespedController,
    HostController,
    ReviewGuestController,
  ],
  providers: [
    ReviewRepository,
    PropertyRepository,
    HuespedRepository,
    HostRepository,
    ReviewGuestRepository,
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
    ReviewGuestMapper,
    ReviewGuestFactory,
    PropertyService,
    HostService,
    GuestService,
  ],
})
export class ReviewsModule {}
