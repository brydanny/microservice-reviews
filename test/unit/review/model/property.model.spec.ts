import { Property } from '../../../../src/reviews/domain/model/property/property.model';
describe('Property', () => {
  it('debería crear una instancia de Property correctamente', () => {
    // Arrange: Configuración inicial
    const name = 'Ejemplo Propiedad';
    const address = 'Ejemplo Dirección';

    // Act: Creamos una instancia de Property
    const property = new Property(name, address);

    // Assert: Verificar que los valores se establezcan correctamente
    expect(property.getName()).toBe(name);
    expect(property.getAddress()).toBe(address);
  });

  it('debería permitir cambiar el nombre de la propiedad', () => {
    // Arrange: Configuración inicial
    const name = 'Ejemplo Propiedad';
    const address = 'Ejemplo Dirección';
    const property = new Property(name, address);

    // Act: Cambiamos el nombre de la propiedad
    const nuevoNombre = 'Nuevo Nombre';
    property.setName(nuevoNombre);

    // Assert: Verificar que el nombre se haya actualizado correctamente
    expect(property.getName()).toBe(nuevoNombre);
  });
});
