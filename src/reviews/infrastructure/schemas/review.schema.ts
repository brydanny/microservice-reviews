import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../database/identifiable-entity.schema';

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
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModelSchema);
