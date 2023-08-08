import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Host } from '../../domain/model/host/host.model';
import { HostModelSchema } from '../schemas/host.schema';

@Injectable()
export class HostMapper {
  constructor(
    @InjectModel(HostModelSchema.name)
    private hostModel: Model<HostModelSchema>,
  ) {}

  public mapToDomain(hostDocumentSchema: HostModelSchema): Host {
    return new Host(
      hostDocumentSchema.name,
      hostDocumentSchema.ciudad,
      hostDocumentSchema.pais,
    );
  }

  public mapToEntity(hostEntity: Host): HostModelSchema {
    const hostSchema = new this.hostModel({
      name: hostEntity.getName(),
      ciudad: hostEntity.getCiudad(),
      pais: hostEntity.getPais(),
    });
    return hostSchema;
  }
}
