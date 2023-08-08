import { Host } from '../model/host/host.model';

export interface iHostRepository {
  save: (host: any) => any;

  findById: (id: string) => Promise<any | null>;

  findAll: () => Promise<any[]>;
}
