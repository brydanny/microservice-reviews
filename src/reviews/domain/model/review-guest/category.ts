//import { Score } from '../../valueObjects/score.valueObject';
//import { Category } from './category.enum';

export class CategoryReview {
  constructor(
    private LIMPIEZA: number,
    private COMUNICACION: number,
    private CUMPLIMIENTO: number,
  ) {}
  public calculateAverage(): number {
    const total = this.LIMPIEZA + this.COMUNICACION + this.CUMPLIMIENTO;
    return total / 3;
  }
}
