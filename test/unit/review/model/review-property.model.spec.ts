import { ReviewProperty } from '../../../../src/reviews/domain/model/review-property/review-property.model';

describe('ReviewProperty', () => {
  it('debería crear una instancia de ReviewProperty correctamente', () => {
    // Arrange: Configuración inicial
    const comentario = 'Ejemplo comentario';
    const propertyId = 'Ejemplo Property ID';
    const huespedId = 'Ejemplo Huesped ID';
    const categoryReview = {}; // Puedes definir un objeto de prueba aquí

    // Act: Creamos una instancia de ReviewProperty
    const reviewProperty = new ReviewProperty(
      comentario,
      propertyId,
      huespedId,
      categoryReview,
    );

    // Assert: Verificar que los valores se establezcan correctamente
    expect(reviewProperty.getComentario()).toBe(comentario);
    expect(reviewProperty.getPropertyId()).toBe(propertyId);
    expect(reviewProperty.getHuespedId()).toBe(huespedId);
    expect(reviewProperty.getCategoryReview()).toBe(categoryReview);
  });

  it('debería permitir cambiar el comentario', () => {
    // Arrange: Configuración inicial
    const comentario = 'Ejemplo comentario';
    const propertyId = 'Ejemplo Property ID';
    const huespedId = 'Ejemplo Huesped ID';
    const categoryReview = {}; // Puedes definir un objeto de prueba aquí
    const reviewProperty = new ReviewProperty(
      comentario,
      propertyId,
      huespedId,
      categoryReview,
    );

    // Act: Cambiamos el comentario
    const nuevoComentario = 'Nuevo Comentario';
    reviewProperty.setComentario(nuevoComentario);

    // Assert: Verificar que el comentario se haya actualizado correctamente
    expect(reviewProperty.getComentario()).toBe(nuevoComentario);
  });
});
