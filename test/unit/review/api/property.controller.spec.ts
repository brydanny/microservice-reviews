import { Test, TestingModule } from '@nestjs/testing';
import { PropertyController } from '../../../../src/reviews/api/property.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePropertyDto } from '../../../../src/reviews/application/dtos/property.dto';
import { CreatePropertyCommand } from '../../../../src/reviews/application/commands/impl/create-property.command';
import { GetHostQuery } from '../../../../src/reviews/application/queries/impl/get-host.query';

describe('HuespedController', () => {
  let propertyController: PropertyController;
  let commandBus: CommandBus;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyController],
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

    propertyController = module.get<PropertyController>(PropertyController);
    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  test('debería estar definido', () => {
    expect(propertyController).toBeDefined();
  });

  test('Crear una propiedad', () => {
    const createPropertyDto: CreatePropertyDto = {
      name: 'Cabaña entera',
      address: 'Laguna Verde, Valparaiso Region, Chile',
    };
    propertyController.create(createPropertyDto);
    expect(commandBus.execute).toHaveBeenCalledWith(
      new CreatePropertyCommand(createPropertyDto),
    );
  });
});
