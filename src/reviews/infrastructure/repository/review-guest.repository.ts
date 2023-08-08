import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { ReviewGuestModelSchema } from '../schemas/review-guest.schema';
import { iReviewGuestRepository } from '../../domain/repositories/iReview-guest';
import { ReviewGuest } from '../../domain/model/review-guest/review-guest.model';
import { ReviewGuestMapper } from '../mapper/review-guest.mapper';

@Injectable()
export class ReviewGuestRepository implements iReviewGuestRepository {
  constructor(
    @InjectModel(ReviewGuestModelSchema.name)
    private readonly reviewModel: Model<ReviewGuestModelSchema>,
    private readonly reviewMapper: ReviewGuestMapper,
  ) {}

  save = (review: ReviewGuest): ReviewGuest => {
    const newReview = new this.reviewModel({
      _id: new ObjectId(),
      comentario: review.getComentario(),
      huespedId: review.getHuespedId(),
      hostId: review.getHostId(),
      registerDate: review.getRegisterDate(),
      categoryReview: review.getCategoryReview(),
    });

    newReview.save();

    return this.reviewMapper.mapToDomain(newReview);
  };

  findById = (id: string): Promise<ReviewGuestModelSchema> => {
    return this.reviewModel.findById(id).exec();
  };

  findAll = (): Promise<ReviewGuestModelSchema[]> => {
    return this.reviewModel.find().exec();
  };
}
