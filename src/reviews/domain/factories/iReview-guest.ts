export interface iReviewGuest {
  createReview(
    comentario: string,
    huespedId: string,
    hostId: string,
    categoryReview: any,
  );
}
