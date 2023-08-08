import { ReviewGuest } from '../model/review-guest/review-guest.model';

export interface iReviewGuestRepository {
  save: (reviewProperty: any) => any;

  findById: (id: string) => Promise<any | null>;

  findAll: () => Promise<any[]>;
}
