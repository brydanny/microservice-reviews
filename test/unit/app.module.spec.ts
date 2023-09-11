import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';

describe('AppModule', () => {
  let appModule: TestingModule;

  beforeAll(async () => {
    appModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('debería estar definido', () => {
    expect(appModule).toBeDefined();
  });
});
