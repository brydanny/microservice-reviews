import { AggregateRoot } from '../../../../shared-kernel/core/aggregateRoot';

export class Host extends AggregateRoot {
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
