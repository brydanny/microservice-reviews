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
      propertyDocumentSchema.id,
      propertyDocumentSchema.name,
      propertyDocumentSchema.address,
      propertyDocumentSchema.typeProperty,
      propertyDocumentSchema.city,
    );
  }

  public mapToEntity(propertyEntity: Property): PropertyModelSchema {
    const propertySchema = new this.propertyModel({
      id: propertyEntity.getId(),
      name: propertyEntity.getName(),
      address: propertyEntity.getAddress(),
      typeProperty: propertyEntity.getTypeProperty(),
      city: propertyEntity.getCity(),
    });
    return propertySchema;
  }
}
