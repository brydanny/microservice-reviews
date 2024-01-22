import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetReviewQuery } from '../impl/get-review.query';
import { ReviewRepository } from '../../../infrastructure/repository/review.repository';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetReviewQuery)
export class GetReviewHandler implements IQueryHandler<GetReviewQuery> {
  constructor(private readonly repository: ReviewRepository) {}

  async execute(query: GetReviewQuery) {
    try {
      return this.repository.findById(query.id);
    } catch (error) {
      throw new NotFoundException(`Review with ID ${query.id} not found`);
    }
  }
}
