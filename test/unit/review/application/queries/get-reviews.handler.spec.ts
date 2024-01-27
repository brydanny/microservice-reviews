import { Test, TestingModule } from '@nestjs/testing';
import { GetReviewsQuery } from '../../../../../src/reviews/application/queries/impl/get-reviews.query';
import { ReviewRepository } from '../../../../../src/reviews/infrastructure/repository/review.repository';
import { GetReviewsHandler } from '../../../../../src/reviews/application/queries/handlers/get-reviews.handler';

class MockHuespedRepository {
  findAll() {
    return ['Propiedad1', 'Propiedad2', 'Propiedad3'];
  }
}

describe('GetReviewsHandler', () => {
  let handler: GetReviewsHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetReviewsHandler,
        {
          provide: ReviewRepository,
          useClass: MockHuespedRepository,
        },
      ],
    }).compile();

    handler = module.get<GetReviewsHandler>(GetReviewsHandler);
  });

  it('Maneja GetPropertiesQuery', async () => {
    const query = new GetReviewsQuery();

    const result = await handler.execute(query);

    expect(result).toEqual(['Propiedad1', 'Propiedad2', 'Propiedad3']);
  });
});
