import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';
import { CreateReviewGuestCommand } from '../../../../../src/reviews/application/commands/impl/create-review-guest.command';
import { CreateReviewGuestHandler } from '../../../../../src/reviews/application/commands/handlers/create-review-guest.handler';
import { ReviewGuestRepository } from '../../../../../src/reviews/infrastructure/repository/review-guest.repository';
import { ReviewGuestFactory } from '../../../../../src/reviews/domain/factories/review-guest.factory';
import { CreateReviewGuestDto } from 'src/reviews/application/dtos/review-guest.dto';

// Mock para EventPublisher
class MockEventPublisher {
  mergeObjectContext() {
    return {
      commit: jest.fn(),
    };
  }
}

// Mock para ReviewGuestRepository
class MockReviewGuestRepository {
  save() {
    return {};
  }
}

// Mock para ReviewGuestFactory
class MockReviewGuestFactory {
  createReview() {
    return {};
  }
}

describe('CreateReviewGuestHandler', () => {
  let handler: ICommandHandler<CreateReviewGuestCommand>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateReviewGuestHandler,
        {
          provide: ReviewGuestRepository,
          useClass: MockReviewGuestRepository,
        },
        {
          provide: EventPublisher,
          useClass: MockEventPublisher,
        },
        {
          provide: ReviewGuestFactory,
          useClass: MockReviewGuestFactory,
        },
      ],
    }).compile();

    handler = module.get<ICommandHandler<CreateReviewGuestCommand>>(
      CreateReviewGuestHandler,
    );
  });

  it('Debe estar definido', () => {
    expect(handler).toBeDefined();
  });

  it('Debe manejar el comando CreateReviewGuestCommand', async () => {
    const dto = new CreateReviewGuestDto();

    const command = new CreateReviewGuestCommand(dto);

    const result = await handler.execute(command);

    expect(result).toBeDefined();
  });

  it('Debe mostrar BadRequestException', async () => {
    jest
      .spyOn(MockReviewGuestRepository.prototype, 'save')
      .mockRejectedValueOnce(new Error('Test Error') as never);

    // Act & Assert
    await expect(
      handler.execute(new CreateReviewGuestCommand(new CreateReviewGuestDto())),
    ).rejects.toThrow(BadRequestException);
  });
});
