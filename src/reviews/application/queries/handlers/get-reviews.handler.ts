import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetReviewsQuery } from '../impl/get-reviews.query';
import { ReviewRepository } from '../../../infrastructure/repository/review.repository';

@QueryHandler(GetReviewsQuery)
export class GetReviewsHandler implements IQueryHandler<GetReviewsQuery> {
  constructor(private readonly repository: ReviewRepository) {}

  async execute(query: GetReviewsQuery) {
    return this.repository.findAll(query.filter);
  }
}
