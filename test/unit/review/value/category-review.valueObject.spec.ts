import { CategoryReview } from '../../../../src/reviews/domain/valueObjects/category-review.valueObject';

describe('Category Review', () => {
  test('Calculando el promedio correctamente', () => {
    // Arrange:  inicializacion de valores
    const limpieza = 5;
    const comunicacion = 4;
    const llegada = 3;
    const fiabilidad = 5;
    const ubicacion = 4;
    const precio = 2;

    // Act: Creamos una instancia
    const categoryReview = new CategoryReview(
      limpieza,
      comunicacion,
      llegada,
      fiabilidad,
      ubicacion,
      precio,
    );

    // Act: Llamamos al método calculateAverage
    const resultado = categoryReview.calculateAverage();

    // Assert: Verificar el resultado esperado
    const expectedAverage =
      (limpieza + comunicacion + llegada + fiabilidad + ubicacion + precio) / 6;
    expect(resultado).toBe(expectedAverage);
  });
});
