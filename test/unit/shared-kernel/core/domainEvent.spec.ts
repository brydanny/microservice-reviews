import { DomainEvent } from '../../../../src/shared-kernel/core/domainEvent';

describe('DomainEvent', () => {
  it('debería crear una instancia de DomainEvent', () => {
    // Arrange: Configuración inicial
    const occurredOn = new Date('2023-09-10T12:00:00Z'); // Fecha de ejemplo

    // Act: Crear una instancia de DomainEvent
    const domainEvent = new DomainEventMock(occurredOn);

    // Assert: Verificar que la instancia se haya creado correctamente
    expect(domainEvent).toBeInstanceOf(DomainEvent);
    expect(domainEvent instanceof DomainEvent).toBe(true);
    expect(domainEvent).toHaveProperty('id');
    //expect(domainEvent).toHaveProperty('occurredOn', occurredOn);
  });
});

// Mock de DomainEvent para poder realizar la prueba
class DomainEventMock extends DomainEvent {
  constructor(ocurredOn: Date) {
    super(ocurredOn);
  }
}
