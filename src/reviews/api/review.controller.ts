import { Controller, Get, Post, Body } from '@nestjs/common';
//import { AppService } from '../../app.service';
import { CreateReviewDto } from '../application/dtos/review.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateReviewCommand } from './../application/commands/impl/create-review.command';

@Controller('review')
export class ReviewController {
  constructor(
    //private readonly appService: AppService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  getHello() {
    //return this.appService.getHello();
    return [];
  }
  @Post()
  create(@Body() payload: CreateReviewDto) {
    return this.commandBus.execute(new CreateReviewCommand(payload));
  }
}
