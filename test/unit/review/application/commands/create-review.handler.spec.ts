import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';
import { CreateReviewCommand } from '../../../../../src/reviews/application/commands/impl/create-review.command';
import { CreateReviewHandler } from '../../../../../src/reviews/application/commands/handlers/create-review.handler';
import { ReviewRepository } from '../../../../../src/reviews/infrastructure/repository/review.repository';
import { ReviewFactory } from '../../../../../src/reviews/domain/factories/review.factory';
import { CreateReviewDto } from 'src/reviews/application/dtos/review.dto';

// Mock para EventPublisher
class MockEventPublisher {
  mergeObjectContext() {
    return {
      commit: jest.fn(),
    };
  }
}

// Mock para ReviewRepository
class MockReviewRepository {
  save() {
    return {};
  }
}

// Mock para ReviewFactory
class MockReviewFactory {
  createReview() {
    return {};
  }
}

describe('CreateReviewHandler', () => {
  let handler: ICommandHandler<CreateReviewCommand>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateReviewHandler,
        {
          provide: ReviewRepository,
          useClass: MockReviewRepository,
        },
        {
          provide: EventPublisher,
          useClass: MockEventPublisher,
        },
        {
          provide: ReviewFactory,
          useClass: MockReviewFactory,
        },
      ],
    }).compile();

    handler =
      module.get<ICommandHandler<CreateReviewCommand>>(CreateReviewHandler);
  });

  it('Debe estar definido', () => {
    expect(handler).toBeDefined();
  });

  it('Debe manejar el comando CreateReviewCommand', async () => {
    const dto = new CreateReviewDto();

    const command = new CreateReviewCommand(dto);

    const result = await handler.execute(command);

    expect(result).toBeDefined();
  });

  it('Debe mostrar BadRequestException', async () => {
    jest
      .spyOn(MockReviewRepository.prototype, 'save')
      .mockRejectedValueOnce(new Error('Test Error') as never);

    // Act & Assert
    await expect(
      handler.execute(new CreateReviewCommand(new CreateReviewDto())),
    ).rejects.toThrow(BadRequestException);
  });
});
