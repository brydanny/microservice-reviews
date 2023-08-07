import { CreateHuespedDto } from '../../dtos/huesped.dto';

export class CreateHuespedCommand {
  constructor(public readonly createHuespedRequest: CreateHuespedDto) {}
}
