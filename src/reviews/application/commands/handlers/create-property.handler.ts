import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';

import { CreatePropertyCommand } from '../impl/create-property.command';
import { PropertyRepository } from '../../../infrastructure/repository/property.repository';
import { PropertyFactory } from '../../../domain/factories/property.factory';

@CommandHandler(CreatePropertyCommand)
export class CreatePropertyHandler
  implements ICommandHandler<CreatePropertyCommand>
{
  constructor(
    private readonly propertyRepository: PropertyRepository,
    private readonly publisher: EventPublisher,
    private readonly propertyFactory: PropertyFactory,
  ) {}

  async execute(command: CreatePropertyCommand) {
    try {
      const { createPropertyRequest } = command;

      const propertyObject = this.propertyFactory.createProperty(
        createPropertyRequest.id,
        createPropertyRequest.name,
        createPropertyRequest.address,
        createPropertyRequest.typeProperty,
        createPropertyRequest.city,
      );

      const property = this.publisher.mergeObjectContext(
        await this.propertyRepository.save(propertyObject),
      );

      property.commit();
      console.log('PropertyDCA created');
      console.log(propertyObject);
      console.log(property);
      return property;
    } catch (error) {
      console.log(error.message);
      throw new BadRequestException(error.message);
    }
  }
}
