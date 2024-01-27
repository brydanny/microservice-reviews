import { Test, TestingModule } from '@nestjs/testing';
import { GetReviewQuery } from '../../../../../src/reviews/application/queries/impl/get-review.query';
import { ReviewRepository } from '../../../../../src/reviews/infrastructure/repository/review.repository';
import { GetReviewHandler } from '../../../../../src/reviews/application/queries/handlers/get-review.handler';

class MockHuespedRepository {
  findById() {
    return {
      id: '100',
      name: 'Review1',
      description: 'Review2',
      score: 3,
    };
  }
}

describe('GetReviewHandler', () => {
  let handler: GetReviewHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetReviewHandler,
        {
          provide: ReviewRepository,
          useClass: MockHuespedRepository,
        },
      ],
    }).compile();

    handler = module.get<GetReviewHandler>(GetReviewHandler);
  });

  it('Maneja GetReviewQuery', async () => {
    const query = new GetReviewQuery('100');

    const result = await handler.execute(query);

    expect(result).toEqual({
      id: '100',
      name: 'Review1',
      description: 'Review2',
      score: 3,
    });
  });
});
