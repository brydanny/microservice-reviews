import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { ReviewModelSchema } from '../schemas/review.schema';
import { iReviewRepository } from '../../domain/repositories/iReview';
import { ReviewProperty } from '../../domain/model/review-property/review-property.model';
import { ReviewMapper } from '../mapper/review.mapper';

@Injectable()
export class ReviewRepository implements iReviewRepository {
  constructor(
    @InjectModel(ReviewModelSchema.name)
    private readonly reviewModel: Model<ReviewModelSchema>,
    private readonly reviewMapper: ReviewMapper,
  ) {}

  save = (review: ReviewProperty): ReviewProperty => {
    const newReview = new this.reviewModel({
      _id: new ObjectId(),
      comentario: review.getComentario(),
      propertyId: review.getPropertyId(),
      huespedId: review.getHuespedId(),
      registerDate: review.getRegisterDate(),
      categoryReview: review.getCategoryReview(),
    });

    newReview.save();

    return this.reviewMapper.mapToDomain(newReview);
  };

  findById = (id: string): Promise<ReviewModelSchema> => {
    const objectId = new ObjectId(id);
    return this.reviewModel.findById(objectId).exec();
  };

  findAll = (): Promise<ReviewModelSchema[]> => {
    return this.reviewModel.find().exec();
  };
}
