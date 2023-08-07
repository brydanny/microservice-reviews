import { CreateReviewDto } from '../../dtos/review.dto';

export class CreateReviewCommand {
  constructor(public readonly createReviewRequest: CreateReviewDto) {}
}
