import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../database/identifiable-entity.schema';
import { CategoryReview } from '../../domain/model/review-guest/category';

@Schema({ collection: 'reviews-guest' })
export class ReviewGuestModelSchema extends IdentifiableEntitySchema {
  @Prop({ required: true })
  comentario: string;

  @Prop({ required: true })
  huespedId: string;

  @Prop({ required: true })
  hostId: string;

  @Prop({ type: Date, required: true })
  registerDate: Date;

  @Prop({ required: true })
  categoryReview: CategoryReview;
}

export const ReviewGuestSchema = SchemaFactory.createForClass(
  ReviewGuestModelSchema,
);
