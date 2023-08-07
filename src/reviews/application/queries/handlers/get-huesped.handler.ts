import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHuespedQuery } from '../impl/get-huesped.query';
import { HuespedRepository } from '../../../infrastructure/repository/huesped.repository';

@QueryHandler(GetHuespedQuery)
export class GetHuespedHandler implements IQueryHandler<GetHuespedQuery> {
  constructor(private readonly repository: HuespedRepository) {}

  async execute(query: GetHuespedQuery) {
    return this.repository.findAll();
  }
}
