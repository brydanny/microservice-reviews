import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Huesped } from '../../domain/model/huesped/huesped.model';
import { HuespedModelSchema } from '../schemas/huesped.schema';

@Injectable()
export class HuespedMapper {
  constructor(
    @InjectModel(HuespedModelSchema.name)
    private huespedModel: Model<HuespedModelSchema>,
  ) {}

  public mapToDomain(huespedDocumentSchema: HuespedModelSchema): Huesped {
    return new Huesped(
      huespedDocumentSchema.name,
      huespedDocumentSchema.ciudad,
      huespedDocumentSchema.pais,
    );
  }

  public mapToEntity(huespedEntity: Huesped): HuespedModelSchema {
    const huespedSchema = new this.huespedModel({
      name: huespedEntity.getName(),
      ciudad: huespedEntity.getCiudad(),
      pais: huespedEntity.getPais(),
    });
    return huespedSchema;
  }
}
