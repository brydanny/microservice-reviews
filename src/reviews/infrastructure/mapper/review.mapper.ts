import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ReviewProperty } from '../../domain/model/review-property/review-property.model';
import { ReviewModelSchema } from '../schemas/review.schema';

@Injectable()
export class ReviewMapper {
  constructor(
    @InjectModel(ReviewModelSchema.name)
    private reviewModel: Model<ReviewModelSchema>,
  ) {}

  public mapToDomain(reviewDocumentSchema: ReviewModelSchema): ReviewProperty {
    return new ReviewProperty(
      reviewDocumentSchema.propertyId,
      reviewDocumentSchema.huespedId,
      reviewDocumentSchema.comentario,
      reviewDocumentSchema.categoryReview,
    );
  }

  public mapToEntity(reviewEntity: ReviewProperty): ReviewModelSchema {
    const reviewschema = new this.reviewModel({
      propertyId: reviewEntity.getPropertyId(),
      huespedId: reviewEntity.getHuespedId(),
      comentario: reviewEntity.getComentario(),
    });
    return reviewschema;
  }
}
