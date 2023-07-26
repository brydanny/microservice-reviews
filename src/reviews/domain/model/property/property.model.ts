import { AggregateRoot } from '../../../../shared-kernel/core/aggregateRoot';

export class Property extends AggregateRoot {
  private name: string;
  private address: string;

  constructor(name: string, address: string) {
    super();
    this.name = name;
    this.address = address;
  }
}
