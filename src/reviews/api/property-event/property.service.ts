import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePropertyCommand } from 'src/reviews/application/commands/impl/create-property.command';
import { CreatePropertyDto } from 'src/reviews/application/dtos/property.dto';

@Injectable()
export class PropertyService {
  constructor(private readonly commandBus: CommandBus) {}

  @RabbitSubscribe({
    exchange: 'property-service:property-created',
    routingKey: '',
    queue: 'properties:review',
  })
  public async pubSubHandler(msg: any) {
    console.log(msg);
    console.log(msg.id);

    const createPropertyDto: CreatePropertyDto = {
      id: msg.id,
      name: msg.name,
      address: msg.address.street,
      typeProperty: msg.propertyType,
      city: msg.address.city,
    };

    await this.commandBus.execute(new CreatePropertyCommand(createPropertyDto));
  }
}
