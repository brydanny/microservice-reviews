import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { HuespedModelSchema } from '../schemas/huesped.schema';
import { iHuespedRepository } from '../../domain/repositories/iHuesped';
import { Huesped } from '../../domain/model/huesped/huesped.model';
import { HuespedMapper } from '../mapper/huesped.mapper';

@Injectable()
export class HuespedRepository implements iHuespedRepository {
  constructor(
    @InjectModel(HuespedModelSchema.name)
    private readonly huespedModel: Model<HuespedModelSchema>,
    private readonly huespedMapper: HuespedMapper,
  ) {}

  save = (huesped: Huesped): Huesped => {
    const newHuesped = new this.huespedModel({
      _id: new ObjectId(),
      name: huesped.getName(),
      ciudad: huesped.getCiudad(),
      pais: huesped.getPais(),
    });

    newHuesped.save();

    return this.huespedMapper.mapToDomain(newHuesped);
  };

  findById = (id: string): Promise<HuespedModelSchema> => {
    return this.huespedModel.findById(id).exec();
  };

  findAll = (): Promise<HuespedModelSchema[]> => {
    return this.huespedModel.find().exec();
  };
}
