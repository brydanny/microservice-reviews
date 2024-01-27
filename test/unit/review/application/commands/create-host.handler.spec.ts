import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';
import { CreateHostCommand } from '../../../../../src/reviews/application/commands/impl/create-host.command';
import { CreateHostHandler } from '../../../../../src/reviews/application/commands/handlers/create-host.handler';
import { HostRepository } from '../../../../../src/reviews/infrastructure/repository/host.repository';
import { HostFactory } from '../../../../../src/reviews/domain/factories/host.factory';
import { CreateHostDto } from 'src/reviews/application/dtos/host.dto';

class MockEventPublisher {
  mergeObjectContext() {
    return {
      commit: jest.fn(),
    };
  }
}

class MockHostRepository {
  save() {
    return {};
  }
}

class MockHostFactory {
  createHost() {
    return {};
  }
}

describe('CreateHostHandler', () => {
  let handler: ICommandHandler<CreateHostCommand>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateHostHandler,
        {
          provide: HostRepository,
          useClass: MockHostRepository,
        },
        {
          provide: EventPublisher,
          useClass: MockEventPublisher,
        },
        {
          provide: HostFactory,
          useClass: MockHostFactory,
        },
      ],
    }).compile();

    handler = module.get<ICommandHandler<CreateHostCommand>>(CreateHostHandler);
  });

  it('Debe estar definido', () => {
    expect(handler).toBeDefined();
  });

  it('Debe manejar el comando CreateHostCommand', async () => {
    const dto = new CreateHostDto();

    const command = new CreateHostCommand(dto);

    const result = await handler.execute(command);

    expect(result).toBeDefined();
  });

  it('Debe mostrar BadRequestException', async () => {
    jest
      .spyOn(MockHostRepository.prototype, 'save')
      .mockRejectedValueOnce(new Error('Test Error') as never);

    await expect(
      handler.execute(new CreateHostCommand(new CreateHostDto())),
    ).rejects.toThrow(BadRequestException);
  });
});
