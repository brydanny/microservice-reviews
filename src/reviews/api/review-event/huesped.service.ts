import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateHostCommand } from 'src/reviews/application/commands/impl/create-host.command';
import { CreateHuespedCommand } from 'src/reviews/application/commands/impl/create-huesped.command';
import { CreatePropertyCommand } from 'src/reviews/application/commands/impl/create-property.command';
import { CreateHostDto } from 'src/reviews/application/dtos/host.dto';
import { CreateHuespedDto } from 'src/reviews/application/dtos/huesped.dto';
import { CreatePropertyDto } from 'src/reviews/application/dtos/property.dto';

@Injectable()
export class HuespedService {
  constructor(private readonly commandBus: CommandBus) {}
  @RabbitSubscribe({
    exchange: 'booking-service:guest-creado',
    routingKey: '',
    queue: 'guest:review',
  })
  public async pubSubHandler(msg: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createHuespedDto: CreateHuespedDto = {
      name: msg.name,
      ciudad: msg.ciudad,
      pais: msg.pais,
    };
    console.log(`Received message: ${msg}`);
    await this.commandBus.execute(new CreateHuespedCommand(createHuespedDto));
  }
}
