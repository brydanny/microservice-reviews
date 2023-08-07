import { Injectable } from '@nestjs/common';
import { iReview } from './iReview';
import { ReviewProperty } from '../model/review-property/review-property.model';

@Injectable()
export class ReviewFactory implements iReview {
  createReview(comentario: string, propertyId: string, huespedId: string) {
    return new ReviewProperty(comentario, propertyId, huespedId);
  }
}
