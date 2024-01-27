import { Test, TestingModule } from '@nestjs/testing';
import { CommandBus } from '@nestjs/cqrs';
import { HostService } from 'src/reviews/api/host-event/host.service';
import { CreateHostCommand } from 'src/reviews/application/commands/impl/create-host.command';

class MockCommandBus {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  execute() {}
}

describe('HostService', () => {
  let service: HostService;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HostService,
        { provide: CommandBus, useClass: MockCommandBus },
      ],
    }).compile();

    service = module.get<HostService>(HostService);
    commandBus = module.get<CommandBus>(CommandBus);
  });

  it('llamar a pubSubHandler', async () => {
    const msg = {
      id: '1',
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
