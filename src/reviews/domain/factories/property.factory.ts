import { Injectable } from '@nestjs/common';
import { iProperty } from './iProperty';
import { Property } from '../model/property/property.model';

@Injectable()
export class PropertyFactory implements iProperty {
  createProperty(name: string, address: string) {
    return new Property(name, address);
  }
}
