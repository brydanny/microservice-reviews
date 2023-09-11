import { CategoryReview } from '../../../../src/reviews/domain/model/review-guest/category';
describe('CategoryReview', () => {
  it('debería calcular el promedio correctamente', () => {
    // Arrange: Configuración inicial
    const limpieza = 5;
    const comunicacion = 4;
    const cumplimiento = 3;

    // Act: Creamos una instancia de CategoryReview
    const categoryReview = new CategoryReview(
      limpieza,
      comunicacion,
      cumplimiento,
    );

    // Act: Llamamos al método calculateAverage
    const resultado = categoryReview.calculateAverage();

    // Assert: Verificar el resultado esperado
    const expectedAverage = (limpieza + comunicacion + cumplimiento) / 3;
    expect(resultado).toBe(expectedAverage);
  });
});
