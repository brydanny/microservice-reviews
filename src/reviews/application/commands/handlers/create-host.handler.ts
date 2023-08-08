import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';

import { CreateHostCommand } from '../impl/create-host.command';
import { HostRepository } from '../../../infrastructure/repository/host.repository';
import { HostFactory } from '../../../domain/factories/host.factory';

@CommandHandler(CreateHostCommand)
export class CreateHostHandler implements ICommandHandler<CreateHostCommand> {
  constructor(
    private readonly hostRepository: HostRepository,
    private readonly publisher: EventPublisher,
    private readonly hostFactory: HostFactory,
  ) {}

  async execute(command: CreateHostCommand) {
    try {
      const { createHostRequest } = command;
      console.log('payload', createHostRequest);

      const hostObject = this.hostFactory.createHost(
        createHostRequest.name,
        createHostRequest.ciudad,
        createHostRequest.pais,
      );

      const host = this.publisher.mergeObjectContext(
        await this.hostRepository.save(hostObject),
      );

      host.commit();
      console.log(hostObject);
      console.log(host);
      return host;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
