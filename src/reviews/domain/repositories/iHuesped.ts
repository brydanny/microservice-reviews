import { Huesped } from '../model/huesped/huesped.model';

export interface iHuespedRepository {
  save: (huesped: any) => any;

  findById: (id: string) => Promise<any | null>;

  findAll: () => Promise<any[]>;
}
