import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';

import { CreateReviewCommand } from '../impl/create-review.command';
import { ReviewRepository } from '../../../infrastructure/repository/review.repository';
import { ReviewFactory } from '../../../domain/factories/review.factory';

@CommandHandler(CreateReviewCommand)
export class CreateReviewHandler
  implements ICommandHandler<CreateReviewCommand>
{
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly publisher: EventPublisher,
    private readonly reviewFactory: ReviewFactory,
  ) {}

  async execute(command: CreateReviewCommand) {
    try {
      const { createReviewRequest } = command;

      console.log("payload", createReviewRequest);

      console.log("handler", createReviewRequest.categoryReview);

      const reviewObject = this.reviewFactory.createReview(
        createReviewRequest.comentario,
        createReviewRequest.propertyId,
        createReviewRequest.huespedId,
        createReviewRequest.categoryReview,
      );

      const review = this.publisher.mergeObjectContext(
        await this.reviewRepository.save(reviewObject),
      );

      review.commit();
      console.log(reviewObject);
      console.log(review);
      return review;
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
