import { Property } from '../model/property/property.model';

export interface iPropertyRepository {
  save: (property: any) => any;

  findById: (id: string) => Promise<any | null>;

  findAll: (criteria?: any) => Promise<any[]>;
}
