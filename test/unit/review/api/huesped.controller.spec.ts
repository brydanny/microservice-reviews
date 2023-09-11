import { Test, TestingModule } from '@nestjs/testing';
import { HuespedController } from '../../../../src/reviews/api/huesped.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateHuespedDto } from '../../../../src/reviews/application/dtos/huesped.dto';
import { CreateHuespedCommand } from '../../../../src/reviews/application/commands/impl/create-huesped.command';
import { GetHostQuery } from '../../../../src/reviews/application/queries/impl/get-host.query';

describe('HuespedController', () => {
  let huespedController: HuespedController;
  let commandBus: CommandBus;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HuespedController],
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

    huespedController = module.get<HuespedController>(HuespedController);
    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  test('debería estar definido', () => {
    expect(huespedController).toBeDefined();
  });

  test('Crear una huesped', () => {
    const createHuespedDto: CreateHuespedDto = {
      name: 'Juan Perez',
      ciudad: 'Sucre',
      pais: 'Bolivia',
    };
    huespedController.create(createHuespedDto);
    expect(commandBus.execute).toHaveBeenCalledWith(
      new CreateHuespedCommand(createHuespedDto),
    );
  });
});
