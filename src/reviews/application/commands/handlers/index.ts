import { CreateReviewHandler } from './create-review.handler';
import { CreatePropertyHandler } from './create-property.handler';
import { CreateHuespedHandler } from './create-huesped.handler';
import { CreateHostHandler } from './create-host.handler';
import { CreateReviewGuestHandler } from './create-review-guest.handler';
export const CommandHandlers = [
  CreateReviewHandler,
  CreatePropertyHandler,
  CreateHuespedHandler,
  CreateHostHandler,
  CreateReviewGuestHandler,
];
