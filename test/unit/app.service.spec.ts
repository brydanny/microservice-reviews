import { AppService } from '../../src/app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  it('debería retornar "Hello World!"', () => {
    // Act: Llamamos al método getHello del servicio
    const result = appService.getHello();

    // Assert: Verificamos que el resultado sea "Hello World!"
    expect(result).toBe('Hello World!');
  });
});
