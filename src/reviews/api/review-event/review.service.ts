import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePropertyCommand } from 'src/reviews/application/commands/impl/create-property.command';
import { CreatePropertyDto } from 'src/reviews/application/dtos/property.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly commandBus: CommandBus) {}
  @RabbitSubscribe({
    exchange: 'demostracion',
    routingKey: '',
    queue: 'properties:review',
  })
  public async pubSubHandler(msg: any) {
    const createPropertyDto: CreatePropertyDto = {
      id: msg.id,
      name: msg.descripcion,
      address: msg.direccion,
      typeProperty: msg.tipo_propiedad,
      city: msg.ciudad,
    };
    console.log(`Received message: ${msg}`);
    await this.commandBus.execute(new CreatePropertyCommand(createPropertyDto));
  }
}
