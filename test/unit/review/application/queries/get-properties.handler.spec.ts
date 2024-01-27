import { Test, TestingModule } from '@nestjs/testing';
import { GetPropertiesQuery } from '../../../../../src/reviews/application/queries/impl/get-properties.query';
import { PropertyRepository } from '../../../../../src/reviews/infrastructure/repository/property.repository';
import { GetPropertiesHandler } from '../../../../../src/reviews/application/queries/handlers/get-properties.handler';

class MockHuespedRepository {
  findAll() {
    return ['Propiedad1', 'Propiedad2', 'Propiedad3'];
  }
}

describe('GetPropertiesHandler', () => {
  let handler: GetPropertiesHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetPropertiesHandler,
        {
          provide: PropertyRepository,
          useClass: MockHuespedRepository,
        },
      ],
    }).compile();

    handler = module.get<GetPropertiesHandler>(GetPropertiesHandler);
  });

  it('Maneja GetPropertiesQuery', async () => {
    const query = new GetPropertiesQuery();

    const result = await handler.execute(query);

    expect(result).toEqual(['Propiedad1', 'Propiedad2', 'Propiedad3']);
  });
});
