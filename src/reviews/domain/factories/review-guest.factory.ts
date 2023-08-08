import { Injectable } from '@nestjs/common';
import { iReviewGuest } from './iReview-guest';
import { ReviewGuest } from '../model/review-guest/review-guest.model';

@Injectable()
export class ReviewGuestFactory implements iReviewGuest {
  createReview(
    comentario: string,
    huespedId: string,
    hostId: string,
    categoryReview: any,
  ) {
    console.log('factory- Guest', categoryReview);
    return new ReviewGuest(comentario, huespedId, hostId, categoryReview);
  }
}
