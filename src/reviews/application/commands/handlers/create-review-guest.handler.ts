import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';

import { CreateReviewGuestCommand } from '../impl/create-review-guest.command';
import { ReviewGuestRepository } from '../../../infrastructure/repository/review-guest.repository';
import { ReviewGuestFactory } from '../../../domain/factories/review-guest.factory';

@CommandHandler(CreateReviewGuestCommand)
export class CreateReviewGuestHandler
  implements ICommandHandler<CreateReviewGuestCommand>
{
  constructor(
    private readonly reviewGuestRepository: ReviewGuestRepository,
    private readonly publisher: EventPublisher,
    private readonly reviewGuestFactory: ReviewGuestFactory,
  ) {}

  async execute(command: CreateReviewGuestCommand) {
    try {
      const { createReviewGuestRequest } = command;

      console.log('payload', createReviewGuestRequest);

      //console.log('handler', createReviewGuestRequest.categoryReview);

      const reviewObject = this.reviewGuestFactory.createReview(
        createReviewGuestRequest.comentario,
        createReviewGuestRequest.huespedId,
        createReviewGuestRequest.hostId,
        createReviewGuestRequest.categoryReview,
      );

      const review = this.publisher.mergeObjectContext(
        await this.reviewGuestRepository.save(reviewObject),
      );

      review.commit();
      console.log('Object ', reviewObject);
      console.log('Publisher ', review);
      return review;
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
