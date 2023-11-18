import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateHostCommand } from 'src/reviews/application/commands/impl/create-host.command';
import { CreatePropertyCommand } from 'src/reviews/application/commands/impl/create-property.command';
import { CreateHostDto } from 'src/reviews/application/dtos/host.dto';
import { CreatePropertyDto } from 'src/reviews/application/dtos/property.dto';

@Injectable()
export class HostService {
  constructor(private readonly commandBus: CommandBus) {}
  @RabbitSubscribe({
    exchange: 'booking-service:reserva-creada',
    routingKey: '',
    queue: 'host:review',
  })
  public async pubSubHandler(msg: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createHostDto: CreateHostDto = {
      name: msg.name,
      ciudad: msg.ciudad,
      pais: msg.pais,
    };
    console.log(`Received message: ${msg}`);
    await this.commandBus.execute(new CreateHostCommand(createHostDto));
  }
}
