import { AggregateRoot } from '@nestjs/cqrs';
import { Huesped } from './../huesped/huesped.model';
import { CategoryReview } from '../../valueObjects/category-review.valueObject';
import { v4 as uuidv4 } from 'uuid';
import { Category } from './category.enum';

export class ReviewProperty extends AggregateRoot {
  private id: string;
  private propertyId: string;
  private huespedId: string;
  private comentario: string;
  private fecha: Date;
  private categoryReviews: CategoryReview[];

  constructor(comentario: string, propertyId: string, huespedId: string) {
    super();
    this.id = uuidv4();
    this.propertyId = propertyId;
    this.huespedId = huespedId;
    this.comentario = comentario;
    Object.keys(Category).map((element) =>
      this.categoryReviews.push(new CategoryReview(element)),
    );
  }
  public getPropertyId(): string {
    return this.propertyId;
  }
  public setPropertyId(value: string) {
    this.propertyId = value;
  }
  public setHuespedId(value: string) {
    this.huespedId = value;
  }
  public getHuespedId(): string {
    return this.huespedId;
  }
  public getComentario(): string {
    return this.comentario;
  }
  public setComentario(value: string) {
    this.comentario = value;
  }
  public registrarComentario(): void {
    this.fecha = new Date();
  }
  public addCategoryScore(positionCategory: number, score: number): void {
    this.categoryReviews[positionCategory].setScoreCategory(score);
  }
}
