import { AggregateRoot } from '@nestjs/cqrs';

export class Huesped extends AggregateRoot {
  private name: string;
  private ciudad: string;
  private pais: string;

  constructor(name: string, ciudad: string, pais: string) {
    super();
    this.name = name;
    this.ciudad = ciudad;
    this.pais = pais;
  }
  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }
  public getCiudad(): string {
    return this.ciudad;
  }

  public setCiudad(value: string) {
    this.ciudad = value;
  }

  public getPais(): string {
    return this.pais;
  }

  public setPais(value: string) {
    this.pais = value;
  }
}
