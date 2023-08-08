import { Controller, Get, Post, Body } from '@nestjs/common';
//import { AppService } from '../../app.service';
import { CreateReviewGuestDto } from '../application/dtos/review-guest.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateReviewGuestCommand } from '../application/commands/impl/create-review-guest.command';
import { GetReviewsGuestQuery } from '../application/queries/impl/get-reviews-guest.query';

@Controller('review-guest')
export class ReviewGuestController {
  constructor(
    //private readonly appService: AppService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('/')
  findAll() {
    return this.queryBus.execute(new GetReviewsGuestQuery());
  }
  @Post()
  create(@Body() payload: CreateReviewGuestDto) {
    console.log(payload);
    return this.commandBus.execute(new CreateReviewGuestCommand(payload));
  }
}
