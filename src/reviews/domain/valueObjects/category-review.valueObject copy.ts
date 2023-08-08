import { Score } from './score.valueObject';
import { Category } from '../model/review-property/category.enum';
import { ValueObject } from '../../../shared-kernel/core/valueObject';

export class CategoryReview extends ValueObject {
  //private category: Category;
  //private score: Score;
  constructor(
    private LIMPIEZA: number,
    private COMUNICACION: number,
    private LLEGADA: number,
    private FIABILIDAD: number,
    private UBICACION: number,
    private PRECIO: number,
  ) {
    super();

    /*if (Object.keys(Category).includes(category) !== false) {
      throw new Error('Categoria invalida');
    }
    this.category = Category[category as keyof typeof Category];
    this.score = new Score();*/
  }
  /*public getCategory() {
    return this.category;
  }
  public setScoreCategory(score: number) {
    this.score.setScore(score);
  }*/
  public calculateAverage(): number {
    const total =
      this.LIMPIEZA +
      this.COMUNICACION +
      this.LLEGADA +
      this.FIABILIDAD +
      this.UBICACION +
      this.PRECIO;
    return total / 6;
  }
}
