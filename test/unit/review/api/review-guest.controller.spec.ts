import { Test, TestingModule } from '@nestjs/testing';
import { ReviewGuestController } from '../../../../src/reviews/api/review-guest.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateReviewGuestDto } from '../../../../src/reviews/application/dtos/review-guest.dto';
import { CreateReviewGuestCommand } from '../../../../src/reviews/application/commands/impl/create-review-guest.command';
import { GetReviewsGuestQuery } from '../../../../src/reviews/application/queries/impl/get-reviews-guest.query';
import { CategoryReview } from 'src/reviews/domain/model/review-guest/category';

describe('ReviewGuestController', () => {
  let reviewGuestController: ReviewGuestController;
  let commandBus: CommandBus;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewGuestController],
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

    reviewGuestController = module.get<ReviewGuestController>(
      ReviewGuestController,
    );
    commandBus = module.get<CommandBus>(CommandBus);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  test('debería estar definido', () => {
    expect(reviewGuestController).toBeDefined();
  });

  test('Crear una propiedad', () => {
    const categoryReview = new CategoryReview(5, 5, 5);

    const createReviewDto: CreateReviewGuestDto = {
      comentario: 'Excelente',
      huespedId: '1000000',
      hostId: '1000000',
      categoryReview: categoryReview,
    };
    reviewGuestController.create(createReviewDto);
    expect(commandBus.execute).toHaveBeenCalledWith(
      new CreateReviewGuestCommand(createReviewDto),
    );
  });

  test('Obtener una propiedad', () => {
    reviewGuestController.findAll();
    expect(queryBus.execute).toHaveBeenCalledWith(new GetReviewsGuestQuery());
  });
});
