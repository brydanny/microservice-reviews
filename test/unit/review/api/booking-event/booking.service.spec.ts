import { Test, TestingModule } from '@nestjs/testing';
import { CommandBus } from '@nestjs/cqrs';
import { BookingService } from 'src/reviews/api/booking-event/booking.service';
import { CreatePropertyCommand } from 'src/reviews/application/commands/impl/create-property.command';

class MockCommandBus {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  execute() {}
}

describe('BookingService', () => {
  let service: BookingService;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingService,
        { provide: CommandBus, useClass: MockCommandBus },
      ],
    }).compile();

    service = module.get<BookingService>(BookingService);
    commandBus = module.get<CommandBus>(CommandBus);
  });

  it('llamar a pubSubHandler', async () => {
    const msg = {
      id: '1',
      name: 'Sample Name',
      address: { street: 'Sample Street', city: 'Sample City' },
      propertyType: 'Sample Type',
    };

    jest.spyOn(commandBus, 'execute').mockResolvedValueOnce(msg);

    await service.pubSubHandler(msg);

    expect(commandBus.execute).toHaveBeenCalledWith(
      new CreatePropertyCommand({
        id: msg.id,
        name: msg.name,
        address: msg.address.street,
        typeProperty: msg.propertyType,
        city: msg.address.city,
      }),
    );
  });
});
