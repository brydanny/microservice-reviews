import { AggregateRoot } from '@nestjs/cqrs';

export class Property extends AggregateRoot {
  private name: string;
  private address: string;

  constructor(name: string, address: string) {
    super();
    this.name = name;
    this.address = address;
  }
  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }
  public getAddress(): string {
    return this.address;
  }

  public setAddress(value: string) {
    this.address = value;
  }
}
