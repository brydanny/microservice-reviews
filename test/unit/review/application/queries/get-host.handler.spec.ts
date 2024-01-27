import { Test, TestingModule } from '@nestjs/testing';
import { GetHostQuery } from '../../../../../src/reviews/application/queries/impl/get-host.query';
import { HostRepository } from '../../../../../src/reviews/infrastructure/repository/host.repository';
import { GetHostHandler } from '../../../../../src/reviews/application/queries/handlers/get-host.handler';

class MockHostRepository {
  findAll() {
    return ['Host1', 'Host2', 'Host3'];
  }
}

describe('GetHostHandler', () => {
  let handler: GetHostHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetHostHandler,
        {
          provide: HostRepository,
          useClass: MockHostRepository,
        },
      ],
    }).compile();

    handler = module.get<GetHostHandler>(GetHostHandler);
  });

  it('Maneja GetHostQuery', async () => {
    const query = new GetHostQuery();

    const result = await handler.execute(query);

    expect(result).toEqual(['Host1', 'Host2', 'Host3']);
  });
});
