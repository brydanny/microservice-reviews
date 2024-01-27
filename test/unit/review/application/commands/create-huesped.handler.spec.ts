import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';
import { CreateHuespedCommand } from '../../../../../src/reviews/application/commands/impl/create-huesped.command';
import { CreateHuespedHandler } from '../../../../../src/reviews/application/commands/handlers/create-huesped.handler';
import { HuespedRepository } from '../../../../../src/reviews/infrastructure/repository/huesped.repository';
import { HuespedFactory } from '../../../../../src/reviews/domain/factories/huesped.factory';
import { CreateHuespedDto } from 'src/reviews/application/dtos/huesped.dto';

// Mock para EventPublisher
class MockEventPublisher {
  mergeObjectContext() {
    return {
      commit: jest.fn(),
    };
  }
}

// Mock para HuespedRepository
class MockHuespedRepository {
  save() {
    return {};
  }
}

// Mock para HuespedFactory
class MockHuespedFactory {
  createHuesped() {
    return {};
  }
}

describe('CreateHuespedHandler', () => {
  let handler: ICommandHandler<CreateHuespedCommand>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateHuespedHandler,
        {
          provide: HuespedRepository,
          useClass: MockHuespedRepository,
        },
        {
          provide: EventPublisher,
          useClass: MockEventPublisher,
        },
        {
          provide: HuespedFactory,
          useClass: MockHuespedFactory,
        },
      ],
    }).compile();

    handler =
      module.get<ICommandHandler<CreateHuespedCommand>>(CreateHuespedHandler);
  });

  it('Debe estar definido', () => {
    expect(handler).toBeDefined();
  });

  it('Debe manejar el comando CreateHuespedCommand', async () => {
    const dto = new CreateHuespedDto();

    const command = new CreateHuespedCommand(dto);

    const result = await handler.execute(command);

    expect(result).toBeDefined();
  });

  it('Debe mostrar BadRequestException', async () => {
    jest
      .spyOn(MockHuespedRepository.prototype, 'save')
      .mockRejectedValueOnce(new Error('Test Error') as never);

    // Act & Assert
    await expect(
      handler.execute(new CreateHuespedCommand(new CreateHuespedDto())),
    ).rejects.toThrow(BadRequestException);
  });
});
