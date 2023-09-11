import { CategoryReview } from '../../../../src/reviews/domain/model/review-property/category';

describe('CategoryReview', () => {
  it('debería calcular el promedio correctamente', () => {
    // Arrange: Configuración inicial
    const limpieza = 5;
    const comunicacion = 4;
    const llegada = 3;
    const fiabilidad = 5;
    const ubicacion = 4;
    const precio = 2;

    // Act: Creamos una instancia de CategoryReview
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
    const expectedAverage = (limpieza + comunicacion + llegada + fiabilidad + ubicacion + precio) / 6;
    expect(resultado).toBe(expectedAverage);
  });
});
