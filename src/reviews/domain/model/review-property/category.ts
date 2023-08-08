import { Score } from '../../valueObjects/score.valueObject';
import { Category } from './category.enum';

export class CategoryReview {
  constructor(
    private LIMPIEZA: number,
    private COMUNICACION: number,
    private LLEGADA: number,
    private FIABILIDAD: number,
    private UBICACION: number,
    private PRECIO: number,
  ) {}
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
