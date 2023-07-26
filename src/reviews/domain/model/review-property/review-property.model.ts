import { Huesped } from './../huesped/huesped.model';
import { AggregateRoot } from '../../../../shared-kernel/core/aggregateRoot';
import { CategoryReview } from '../../valueObjects/category-review.valueObject';
import { Category } from './category.enum';
export class ReviewProperty extends AggregateRoot {
  private propertyId: string;
  private huespedId: string;
  private comentario: string;
  private fecha: Date;
  private categoryReviews: CategoryReview[];

  constructor(comentario: string, propertyId: string, huespedId: string) {
    super();
    this.propertyId = propertyId;
    this.huespedId = huespedId;
    this.comentario = comentario;
    Object.keys(Category).map((element) =>
      this.categoryReviews.push(new CategoryReview(element)),
    );
  }

  public registrarComentario(): void {
    this.fecha = new Date();
  }
  public addCategoryScore(positionCategory: number, score: number) {
    this.categoryReviews[positionCategory].setScoreCategory(score);
  }
}
