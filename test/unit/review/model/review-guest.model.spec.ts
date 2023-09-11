import { ReviewGuest } from '../../../../src/reviews/domain/model/review-guest/review-guest.model';

describe('ReviewGuest', () => {
  it('debería crear una instancia de ReviewGuest correctamente', () => {
    // Arrange: Configuración inicial
    const comentario = 'Ejemplo comentario';
    const huespedId = 'Ejemplo Huesped ID';
    const hostId = 'Ejemplo Host ID';
    const categoryReview = {}; // Puedes definir un objeto de prueba aquí

    // Act: Creamos una instancia de ReviewGuest
    const reviewGuest = new ReviewGuest(
      comentario,
      huespedId,
      hostId,
      categoryReview,
    );

    // Assert: Verificar que los valores se establezcan correctamente
    expect(reviewGuest.getComentario()).toBe(comentario);
    expect(reviewGuest.getHuespedId()).toBe(huespedId);
    expect(reviewGuest.getHostId()).toBe(hostId);
    expect(reviewGuest.getCategoryReview()).toBe(categoryReview);
  });

  it('debería permitir cambiar el comentario', () => {
    // Arrange: Configuración inicial
    const comentario = 'Ejemplo comentario';
    const huespedId = 'Ejemplo Huesped ID';
    const hostId = 'Ejemplo Host ID';
    const categoryReview = {}; // Puedes definir un objeto de prueba aquí
    const reviewGuest = new ReviewGuest(
      comentario,
      huespedId,
      hostId,
      categoryReview,
    );

    // Act: Cambiamos el comentario
    const nuevoComentario = 'Nuevo Comentario';
    reviewGuest.setComentario(nuevoComentario);

    // Assert: Verificar que el comentario se haya actualizado correctamente
    expect(reviewGuest.getComentario()).toBe(nuevoComentario);
  });
});
