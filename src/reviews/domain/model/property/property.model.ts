import { AggregateRoot } from '@nestjs/cqrs';

export class Property extends AggregateRoot {
  private id: number;
  private name: string;
  private address: string;
  private typeProperty: string;
  private city: string;

  constructor(
    id: number,
    name: string,
    address: string,
    typeProperty: string,
    city: string,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.address = address;
    this.typeProperty = typeProperty;
    this.city = city;
  }
  public getId(): number {
    return this.id;
  }
  public setId(value: number) {
    this.id = value;
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
  public setTypeProperty(value: string) {
    this.typeProperty = value;
  }

  public getTypeProperty(): string {
    return this.typeProperty;
  }
  public setCity(value: string) {
    this.city = value;
  }
  public getCity(): string {
    return this.city;
  }
}
