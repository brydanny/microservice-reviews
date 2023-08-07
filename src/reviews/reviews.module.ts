import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './application/commands/handlers';
import { QueryHandlers } from './application/queries/handlers';
import { ReviewController } from './api/review.controller';
import { ReviewRepository } from './infrastructure/repository/review.repository';
import {
  ReviewModelSchema,
  ReviewSchema,
} from './infrastructure/schemas/review.schema';
@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: ReviewModelSchema.name,
        schema: ReviewSchema,
      },
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewRepository, ...CommandHandlers, ...QueryHandlers],
})
export class ReviewsModule {}
