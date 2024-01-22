import { GetReviewsHandler } from './get-reviews.handler';
import { GetPropertiesHandler } from './get-properties.handler';
import { GetHuespedHandler } from './get-huesped.handler';
import { GetHostHandler } from './get-host.handler';
import { GetReviewsGuestHandler } from './get-reviews-guest.handler';
import { GetReviewQuery } from '../impl/get-review.query';
import { GetReviewHandler } from './get-review.handler';

export const QueryHandlers = [
  GetReviewsHandler,
  GetPropertiesHandler,
  GetHuespedHandler,
  GetHostHandler,
  GetReviewsGuestHandler,
  GetReviewQuery,
  GetReviewHandler,
];
