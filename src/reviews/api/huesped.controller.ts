import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateHuespedDto } from '../application/dtos/huesped.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateHuespedCommand } from '../application/commands/impl/create-huesped.command';
import { GetHuespedQuery } from '../application/queries/impl/get-huesped.query';

@Controller('huesped')
export class HuespedController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('/')
  findAll() {
    return this.queryBus.execute(new GetHuespedQuery());
  }

  @Post()
  create(@Body() payload: CreateHuespedDto) {
    return this.commandBus.execute(new CreateHuespedCommand(payload));
  }
}
