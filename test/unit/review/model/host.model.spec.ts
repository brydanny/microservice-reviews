import { Host } from '../../../../src/reviews/domain/model/host/host.model';

describe('Host', () => {
  it('Creando una instancia de Host correctamente', () => {
    // Arrange: Configuración inicial
    const name = 'Ejemplo Host';
    const ciudad = 'Ejemplo Ciudad';
    const pais = 'Ejemplo País';

    // Act: Creamos una instancia de Host
    const host = new Host(name, ciudad, pais);

    // Assert: Verificar que los valores se establezcan correctamente
    expect(host.getName()).toBe(name);
    expect(host.getCiudad()).toBe(ciudad);
    expect(host.getPais()).toBe(pais);
  });

  it('debería permitir cambiar el nombre del host', () => {
    // Arrange: Configuración inicial
    const name = 'Ejemplo Host';
    const ciudad = 'Ejemplo Ciudad';
    const pais = 'Ejemplo País';
    const host = new Host(name, ciudad, pais);

    // Act: Cambiamos el nombre del host
    const nuevoNombre = 'Nuevo Nombre';
    host.setName(nuevoNombre);

    // Assert: Verificar que el nombre se haya actualizado correctamente
    expect(host.getName()).toBe(nuevoNombre);
  });
});
