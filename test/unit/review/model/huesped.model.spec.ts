import { Huesped } from '../../../../src/reviews/domain/model/huesped/huesped.model';

describe('Huesped', () => {
  it('debería crear una instancia de Huesped correctamente', () => {
    // Arrange: Configuración inicial
    const name = 'Ejemplo Huesped';
    const ciudad = 'Ejemplo Ciudad';
    const pais = 'Ejemplo País';

    // Act: Creamos una instancia de Huesped
    const huesped = new Huesped(name, ciudad, pais);

    // Assert: Verificar que los valores se establezcan correctamente
    expect(huesped.getName()).toBe(name);
    expect(huesped.getCiudad()).toBe(ciudad);
    expect(huesped.getPais()).toBe(pais);
  });

  it('debería permitir cambiar el nombre del huesped', () => {
    // Arrange: Configuración inicial
    const name = 'Ejemplo Huesped';
    const ciudad = 'Ejemplo Ciudad';
    const pais = 'Ejemplo País';
    const huesped = new Huesped(name, ciudad, pais);

    // Act: Cambiamos el nombre del huesped
    const nuevoNombre = 'Nuevo Nombre';
    huesped.setName(nuevoNombre);

    // Assert: Verificar que el nombre se haya actualizado correctamente
    expect(huesped.getName()).toBe(nuevoNombre);
  });
});
