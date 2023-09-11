import { Test, TestingModule } from '@nestjs/testing';
import { HostRepository } from '../../../../../src/reviews/infrastructure/repository/host.repository';
import { HostModelSchema } from '../../../../../src/reviews/infrastructure/schemas/host.schema';
//import { HostMapper } from '../../../../../src/reviews/infrastructure/mapper/host.mapper';
//import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// Importa mongoose-mock para simular la base de datos
//import { mongoose, MongoMemoryServer } from '@typegoose/typegoose';
//import { ObjectId } from 'mongodb';

import { environments } from 'src/environments';
import config from 'src/reviews/infrastructure/config';
//import { Mapper } from 'src/reviews/infrastructure/mapper/';
//import { Repositories } from 'src/reviews/infrastructure/repository/';
import { SharedKernelModule } from 'src/shared-kernel/shared-kernel.module';
import { ReviewsModule } from '../../../../../src/reviews/reviews.module';
import { MongooseConfigModule } from 'src/reviews/infrastructure/mongoose/mongoose.module';

describe('HostRepository', () => {
  let hostRepository: HostRepository;
  //let hostModel: Model<HostModelSchema>;
  //const mongod = new MongoMemoryServer();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: environments[process.env.NODE_ENV] || '.env',
          load: [config],
          isGlobal: true,
        }),
        SharedKernelModule,
        ReviewsModule,
        MongooseConfigModule,
      ],
      providers: [
        {
          provide: getModelToken(HostModelSchema.name),
          useValue: {}, // Puedes proporcionar un objeto mock de Mongoose aquí
        },
      ],
    }).compile();

    hostRepository = module.get<HostRepository>(HostRepository);
  });
  it('should be defined', () => {
    expect(hostRepository).toBeDefined();
  });
});
