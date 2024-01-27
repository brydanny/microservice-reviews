import { Test, TestingModule } from '@nestjs/testing';
import { CommandBus } from '@nestjs/cqrs';
import { GuestService } from 'src/reviews/api/guest-event/guest.service';
import { CreateHuespedCommand } from 'src/reviews/application/commands/impl/create-huesped.command';

class MockCommandBus {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  execute() {}
}

describe('GuestService', () => {
  let service: GuestService;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GuestService,
        { provide: CommandBus, useClass: MockCommandBus },
      ],
    }).compile();

    service = module.get<GuestService>(GuestService);
    commandBus = module.get<CommandBus>(CommandBus);
  });

  it('llamar a pubSubHandler', async () => {
    const msg = {
      id: '10000',
      name: 'Sample Name',
      pais: 'Sample Pais',
      ciudad: 'Sample Ciudad',
      email: 'Sample email',
    };

    jest.spyOn(commandBus, 'execute').mockResolvedValueOnce(msg);

    await service.pubSubHandler(msg);

    expect(commandBus.execute).toHaveBeenCalledTimes(1);
  });
});
