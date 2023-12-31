import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { PropertyModelSchema } from '../schemas/property.schema';
import { iPropertyRepository } from '../../domain/repositories/iProperty';
import { Property } from '../../domain/model/property/property.model';
import { PropertyMapper } from '../mapper/property.mapper';

@Injectable()
export class PropertyRepository implements iPropertyRepository {
  constructor(
    @InjectModel(PropertyModelSchema.name)
    private readonly propertyModel: Model<PropertyModelSchema>,
    private readonly propertyMapper: PropertyMapper,
  ) {}

  save = (property: Property): Property => {
    const newProperty = new this.propertyModel({
      _id: new ObjectId(),
      id: property.getId(),
      name: property.getName(),
      address: property.getAddress(),
      typeProperty: property.getTypeProperty(),
      city: property.getCity(),
    });

    newProperty.save();

    return this.propertyMapper.mapToDomain(newProperty);
  };

  findById = (id: string): Promise<PropertyModelSchema> => {
    return this.propertyModel.findById(id).exec();
  };

  findAll = (): Promise<PropertyModelSchema[]> => {
    return this.propertyModel.find().exec();
  };
}
