import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreatePropertyDto } from '../application/dtos/property.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePropertyCommand } from '../application/commands/impl/create-property.command';
import { GetPropertiesQuery } from '../application/queries/impl/get-properties.query';
import { EventPattern } from '@nestjs/microservices';

@Controller('property')
export class PropertyController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('/')
  findAll() {
    return this.queryBus.execute(new GetPropertiesQuery());
  }

  @Post()
  create(@Body() payload: CreatePropertyDto) {
    return this.commandBus.execute(new CreatePropertyCommand(payload));
  }

  // @EventPattern('demo:danny')
  // find(data: any) {
  //   console.log(`mensaje: "${data}"`);
  //   return this.queryBus.execute(new GetPropertiesQuery());
  // }
}
