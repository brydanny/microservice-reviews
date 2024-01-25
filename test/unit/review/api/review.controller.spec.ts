import { Test, TestingModule } from '@nestjs/testing';
import { ReviewController } from '../../../../src/reviews/api/review.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateReviewDto } from '../../../../src/reviews/application/dtos/review.dto';
import { CreateReviewCommand } from '../../../../src/reviews/application/commands/impl/create-review.command';
import { GetHostQuery } from '../../../../src/reviews/application/queries/impl/get-host.query';
import { CategoryReviewDto } from 'src/reviews/application/dtos/category-review.dto';
describe('ReviewController', () => {
  let reviewController: ReviewController;
  let commandBus: CommandBus;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
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

    reviewController = module.get<ReviewController>(ReviewController);
    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  test('debería estar definido', () => {
    expect(reviewController).toBeDefined();
  });

  /* test('Crear una host', () => {
    const categoryReviewDto: CategoryReviewDto{
      9, // LIMPIEZA
      9, // COMUNICACION
      10, // LLEGADA
      9, // FIABILIDAD
      9, // UBICACION
      9, // PRECIO
  };
    const createReviewDto: CreateReviewDto = {
      comentario: 'estancia agradable',
      propertyId: '64d13ffd6fa3018421c92b5e',
      huespedId: '64d155eff51153af01e92f69',
      categoryReview: categoryReviewDto,
    };
    reviewController.create(createReviewDto);
    expect(commandBus.execute).toHaveBeenCalledWith(
      new CreateReviewCommand(createReviewDto),
    );
  }); */
});
