import { Test, TestingModule } from '@nestjs/testing';
import { GetReviewsGuestQuery } from '../../../../../src/reviews/application/queries/impl/get-reviews-guest.query';
import { ReviewGuestRepository } from '../../../../../src/reviews/infrastructure/repository/review-guest.repository';
import { GetReviewsGuestHandler } from '../../../../../src/reviews/application/queries/handlers/get-reviews-guest.handler';

class MockHuespedRepository {
  findAll() {
    return ['Review1', 'Review2', 'Review3'];
  }
}

describe('GetReviewsGuestHandler', () => {
  let handler: GetReviewsGuestHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetReviewsGuestHandler,
        {
          provide: ReviewGuestRepository,
          useClass: MockHuespedRepository,
        },
      ],
    }).compile();

    handler = module.get<GetReviewsGuestHandler>(GetReviewsGuestHandler);
  });

  it('Maneja GetPropertiesQuery', async () => {
    const query = new GetReviewsGuestQuery();

    const result = await handler.execute(query);

    expect(result).toEqual(['Review1', 'Review2', 'Review3']);
  });
});
