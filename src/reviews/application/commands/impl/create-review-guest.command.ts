import { CreateReviewGuestDto } from '../../dtos/review-guest.dto';

export class CreateReviewGuestCommand {
  constructor(public readonly createReviewGuestRequest: CreateReviewGuestDto) {}
}
