import { Controller, Get, Post, Body, Param } from '@nestjs/common';
//import { AppService } from '../../app.service';
import { CreateReviewDto } from '../application/dtos/review.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateReviewCommand } from './../application/commands/impl/create-review.command';
import { GetReviewsQuery } from '../application/queries/impl/get-reviews.query';
import { GetReviewQuery } from '../application/queries/impl/get-review.query';

@Controller('review')
export class ReviewController {
  constructor(
    //private readonly appService: AppService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('/')
  findAll() {
    return this.queryBus.execute(new GetReviewsQuery());
  }
  @Post()
  create(@Body() payload: CreateReviewDto) {
    console.log(payload);
    return this.commandBus.execute(new CreateReviewCommand(payload));
  }
  @Get('/:id')
  findOne(@Param('id') id: string): Promise<GetReviewQuery> {
    return this.queryBus.execute(new GetReviewQuery(id));
  }
}
