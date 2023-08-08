import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateHostDto } from '../application/dtos/host.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateHostCommand } from '../application/commands/impl/create-host.command';
import { GetHostQuery } from '../application/queries/impl/get-host.query';

@Controller('host')
export class HostController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('/')
  findAll() {
    return this.queryBus.execute(new GetHostQuery());
  }

  @Post()
  create(@Body() payload: CreateHostDto) {
    return this.commandBus.execute(new CreateHostCommand(payload));
  }
}
