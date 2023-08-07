import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';

import { CreateHuespedCommand } from '../impl/create-huesped.command';
import { HuespedRepository } from '../../../infrastructure/repository/huesped.repository';
import { HuespedFactory } from '../../../domain/factories/huesped.factory';

@CommandHandler(CreateHuespedCommand)
export class CreateHuespedHandler
  implements ICommandHandler<CreateHuespedCommand>
{
  constructor(
    private readonly huespedRepository: HuespedRepository,
    private readonly publisher: EventPublisher,
    private readonly huespedFactory: HuespedFactory,
  ) {}

  async execute(command: CreateHuespedCommand) {
    try {
      const { createHuespedRequest } = command;

      const huespedObject = this.huespedFactory.createHuesped(
        createHuespedRequest.name,
        createHuespedRequest.ciudad,
        createHuespedRequest.pais,
      );

      const huesped = this.publisher.mergeObjectContext(
        await this.huespedRepository.save(huespedObject),
      );

      huesped.commit();

      return huesped;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
