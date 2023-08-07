import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ReviewModelSchema } from '../schemas/review.schema';
import { iReviewRepository } from '../../domain/repositories/ReviewRepository';

@Injectable()
export class ReviewRepository implements iReviewRepository {
  constructor(
    @InjectModel(ReviewModelSchema.name)
    private reviewModel: Model<ReviewModelSchema>,
  ) {}

  newId: () => Promise<string>;

  save: (review: ReviewModelSchema) => Promise<void>;

  findById: (id: string) => Promise<ReviewModelSchema | null>;

  public findAll = (): Promise<ReviewModelSchema[]> =>
    this.reviewModel.find().exec();
}
