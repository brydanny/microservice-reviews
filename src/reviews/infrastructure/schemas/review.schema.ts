import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../database/identifiable-entity.schema';
import { CategoryReview } from '../../domain/valueObjects/category-review.valueObject';

@Schema({ collection: 'reviews' })
export class ReviewModelSchema extends IdentifiableEntitySchema {
  @Prop({ required: true })
  comentario: string;

  @Prop({ required: true })
  propertyId: string;

  @Prop({ required: true })
  huespedId: string;

  @Prop({ type: Date, required: true })
  registerDate: Date;

  @Prop({ required: true })
  categoryReview: CategoryReview;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModelSchema);
