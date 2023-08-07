import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPropertiesQuery } from '../impl/get-properties.query';
import { PropertyRepository } from '../../../infrastructure/repository/property.repository';

@QueryHandler(GetPropertiesQuery)
export class GetPropertiesHandler implements IQueryHandler<GetPropertiesQuery> {
  constructor(private readonly repository: PropertyRepository) {}

  async execute(query: GetPropertiesQuery) {
    return this.repository.findAll();
  }
}
