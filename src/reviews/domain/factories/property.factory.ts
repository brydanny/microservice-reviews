import { Injectable } from '@nestjs/common';
import { iProperty } from './iProperty';
import { Property } from '../model/property/property.model';

@Injectable()
export class PropertyFactory implements iProperty {
  createProperty(
    id: string,
    name: string,
    address: string,
    typeProperty: string,
    city: string,
  ) {
    return new Property(id, name, address, typeProperty, city);
  }
}
