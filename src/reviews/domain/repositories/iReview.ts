import { ReviewProperty } from '../model/review-property/review-property.model';

export interface iReviewRepository {
  save: (reviewProperty: any) => any;

  findById: (id: string) => Promise<any | null>;

  findAll: () => Promise<any[]>;
}
