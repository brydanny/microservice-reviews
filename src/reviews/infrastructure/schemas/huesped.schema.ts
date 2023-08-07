import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../database/identifiable-entity.schema';

@Schema({ collection: 'huespeds' })
export class HuespedModelSchema extends IdentifiableEntitySchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  ciudad: string;

  @Prop({ required: true })
  pais: string;
}

export const HuespedSchema = SchemaFactory.createForClass(HuespedModelSchema);
