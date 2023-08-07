import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { now, Document } from 'mongoose';
import { IdentifiableEntitySchema } from '../database/identifiable-entity.schema';

// @Schema({ versionKey: false, collection: 'Reviews' })
export class ReviewModelSchema extends IdentifiableEntitySchema {
  @Prop({ required: true })
  propertyId: string;

  @Prop({ required: true })
  huespedId: string;

  @Prop({ required: true })
  comentario: string;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModelSchema);
