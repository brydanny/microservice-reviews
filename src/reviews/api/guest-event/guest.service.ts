import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateHuespedCommand } from 'src/reviews/application/commands/impl/create-huesped.command';
import { CreateHuespedDto } from 'src/reviews/application/dtos/huesped.dto';

@Injectable()
export class GuestService {
  constructor(private readonly commandBus: CommandBus) {}

  @RabbitSubscribe({
    exchange: 'user-service:guest-created',
    routingKey: '',
    queue: 'review:guest',
  })
  public async pubSubHandler(msg: any) {
    console.log(msg);
    console.log(msg.id);

    const createHuespedDto: CreateHuespedDto = {
      id: msg._id,
      name: msg.name,
      pais: msg.country,
      ciudad: msg.city,
      email: msg.email,
    };

    await this.commandBus.execute(new CreateHuespedCommand(createHuespedDto));
  }
}
