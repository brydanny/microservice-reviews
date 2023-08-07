import { ReviewProperty } from '../model/review-property/review-property.model';

export interface iReviewRepository {
  newId: () => Promise<string>;

  save: (reviewProperty: any) => Promise<void>;

  findById: (id: string) => Promise<any | null>;

  findAll: () => Promise<any[]>;
}
