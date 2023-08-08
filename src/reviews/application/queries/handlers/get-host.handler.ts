import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHostQuery } from '../impl/get-host.query';
import { HostRepository } from '../../../infrastructure/repository/host.repository';

@QueryHandler(GetHostQuery)
export class GetHostHandler implements IQueryHandler<GetHostQuery> {
  constructor(private readonly repository: HostRepository) {}

  async execute(query: GetHostQuery) {
    return this.repository.findAll();
  }
}
