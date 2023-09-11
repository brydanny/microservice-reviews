import { Test, TestingModule } from '@nestjs/testing';
import { HostController } from '../../../../src/reviews/api/host.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateHostDto } from '../../../../src/reviews/application/dtos/host.dto';
import { CreateHostCommand } from '../../../../src/reviews/application/commands/impl/create-host.command';
import { GetHostQuery } from '../../../../src/reviews/application/queries/impl/get-host.query';

describe('HostController', () => {
  let hostController: HostController;
  let commandBus: CommandBus;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostController],
      providers: [
        {
          provide: CommandBus,
          useValue: {
            execute: jest.fn(), // Mock para el CommandBus
          },
        },
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(), // Mock para el QueryBus
          },
        },
      ],
    }).compile();

    hostController = module.get<HostController>(HostController);
    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  test('debería estar definido', () => {
    expect(hostController).toBeDefined();
  });

  test('Crear una host', () => {
    const createHostDto: CreateHostDto = {
      name: 'Juan Perez',
      ciudad: 'Sucre',
      pais: 'Bolivia',
    };
    hostController.create(createHostDto);
    expect(commandBus.execute).toHaveBeenCalledWith(
      new CreateHostCommand(createHostDto),
    );
  });
});
