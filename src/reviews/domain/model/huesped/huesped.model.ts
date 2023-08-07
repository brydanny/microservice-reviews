import { AggregateRoot } from '@nestjs/cqrs';

export class Huesped extends AggregateRoot {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
