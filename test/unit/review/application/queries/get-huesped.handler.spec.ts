import { Test, TestingModule } from '@nestjs/testing';
import { GetHuespedQuery } from '../../../../../src/reviews/application/queries/impl/get-huesped.query';
import { HuespedRepository } from '../../../../../src/reviews/infrastructure/repository/huesped.repository';
import { GetHuespedHandler } from '../../../../../src/reviews/application/queries/handlers/get-huesped.handler';

class MockHuespedRepository {
  findAll() {
    return ['Huesped1', 'Huesped2', 'Huesped3'];
  }
}

describe('GetHuespedHandler', () => {
  let handler: GetHuespedHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetHuespedHandler,
        {
          provide: HuespedRepository,
          useClass: MockHuespedRepository,
        },
      ],
    }).compile();

    handler = module.get<GetHuespedHandler>(GetHuespedHandler);
  });

  it('Maneja GetHuespedQuery', async () => {
    const query = new GetHuespedQuery();

    const result = await handler.execute(query);

    expect(result).toEqual(['Huesped1', 'Huesped2', 'Huesped3']);
  });
});
