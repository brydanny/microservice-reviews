import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateReviewCommand } from '../impl/create-review.command';
import { ReviewRepository } from '../../../infrastructure/repository/review.repository';

@CommandHandler(CreateReviewCommand)
export class CreateReviewHandler
  implements ICommandHandler<CreateReviewCommand>
{
  constructor(
    private readonly repository: ReviewRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateReviewCommand) {
    console.log('command', command);
    return { hola: 'mundo' };
    // const { heroId, itemId } = command;
    // const hero = this.publisher.mergeObjectContext(
    //   await this.repository.findOneById(+heroId),
    // );
    // hero.addItem(itemId);
    // hero.commit();
  }
}
