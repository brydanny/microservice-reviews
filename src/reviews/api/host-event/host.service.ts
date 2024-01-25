import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateHostCommand } from 'src/reviews/application/commands/impl/create-host.command';
import { CreateHostDto } from 'src/reviews/application/dtos/host.dto';

@Injectable()
export class HostService {
  constructor(private readonly commandBus: CommandBus) {}

  @RabbitSubscribe({
    exchange: 'user-service:host-created',
    routingKey: '',
    queue: 'review:host',
  })
  public async pubSubHandler(msg: any) {
    console.log(msg);
    console.log(msg.id);

    const createHostDto: CreateHostDto = {
      id: msg._id,
      name: msg.name,
      pais: msg.country,
      ciudad: msg.city,
      email: msg.email,
    };

    await this.commandBus.execute(new CreateHostCommand(createHostDto));
  }
}
