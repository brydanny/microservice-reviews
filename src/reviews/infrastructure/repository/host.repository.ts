import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { HostModelSchema } from '../schemas/host.schema';
import { iHostRepository } from '../../domain/repositories/iHost';
import { Host } from '../../domain/model/host/host.model';
import { HostMapper } from '../mapper/host.mapper';

@Injectable()
export class HostRepository implements iHostRepository {
  constructor(
    @InjectModel(HostModelSchema.name)
    private readonly hostModel: Model<HostModelSchema>,
    private readonly hostMapper: HostMapper,
  ) {}

  save = (host: Host): Host => {
    const newHost = new this.hostModel({
      _id: new ObjectId(),
      name: host.getName(),
      ciudad: host.getCiudad(),
      pais: host.getPais(),
    });

    newHost.save();

    return this.hostMapper.mapToDomain(newHost);
  };

  findById = (id: string): Promise<HostModelSchema> => {
    return this.hostModel.findById(id).exec();
  };

  findAll = (): Promise<HostModelSchema[]> => {
    return this.hostModel.find().exec();
  };
}
