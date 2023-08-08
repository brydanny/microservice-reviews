import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetReviewsGuestQuery } from '../impl/get-reviews-guest.query';
import { ReviewGuestRepository } from '../../../infrastructure/repository/review-guest.repository';

@QueryHandler(GetReviewsGuestQuery)
export class GetReviewsGuestHandler
  implements IQueryHandler<GetReviewsGuestQuery>
{
  constructor(private readonly repository: ReviewGuestRepository) {}

  async execute(query: GetReviewsGuestQuery) {
    return this.repository.findAll();
  }
}
