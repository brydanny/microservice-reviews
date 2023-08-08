import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ReviewGuest } from '../../domain/model/review-guest/review-guest.model';
import { ReviewGuestModelSchema } from '../schemas/review-guest.schema';

@Injectable()
export class ReviewGuestMapper {
  constructor(
    @InjectModel(ReviewGuestModelSchema.name)
    private reviewModel: Model<ReviewGuestModelSchema>,
  ) {}

  public mapToDomain(
    reviewDocumentSchema: ReviewGuestModelSchema,
  ): ReviewGuest {
    return new ReviewGuest(
      reviewDocumentSchema.huespedId,
      reviewDocumentSchema.hostId,
      reviewDocumentSchema.comentario,
      reviewDocumentSchema.categoryReview,
    );
  }

  public mapToEntity(reviewEntity: ReviewGuest): ReviewGuestModelSchema {
    const reviewschema = new this.reviewModel({
      huespedId: reviewEntity.getHuespedId(),
      hostId: reviewEntity.getHostId(),
      comentario: reviewEntity.getComentario(),
      categoryReview: reviewEntity.getCategoryReview(),
    });
    return reviewschema;
  }
}
