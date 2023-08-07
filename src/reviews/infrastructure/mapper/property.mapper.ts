import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Property } from '../../domain/model/property/property.model';
import { PropertyModelSchema } from '../schemas/property.schema';

@Injectable()
export class PropertyMapper {
  constructor(
    @InjectModel(PropertyModelSchema.name)
    private propertyModel: Model<PropertyModelSchema>,
  ) {}

  public mapToDomain(propertyDocumentSchema: PropertyModelSchema): Property {
    return new Property(
      propertyDocumentSchema.name,
      propertyDocumentSchema.address,
    );
  }

  public mapToEntity(propertyEntity: Property): PropertyModelSchema {
    const propertySchema = new this.propertyModel({
      name: propertyEntity.getName(),
      address: propertyEntity.getAddress(),
    });
    return propertySchema;
  }
}
