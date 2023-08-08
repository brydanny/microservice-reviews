import { AggregateRoot } from '@nestjs/cqrs';
//import { Huesped } from './../huesped/huesped.model';
import { CategoryReview } from './category';
//import { Category } from './category.enum';

export class ReviewProperty extends AggregateRoot {
  //private id: string;

  private comentario: string;
  private propertyId: string;
  private huespedId: string;
  private registerDate: Date;
  private categoryReview: CategoryReview;

  constructor(
    comentario: string,
    propertyId: string,
    huespedId: string,
    categoryReview: any,
  ) {
    console.log(":::categoryReview Model:::", categoryReview);
    super();
    //this.id = uuidv4();
    this.propertyId = propertyId;
    this.huespedId = huespedId;
    this.comentario = comentario;
    this.registerDate = new Date();
    this.categoryReview = categoryReview;
    /*Object.keys(Category).map((element) =>
      this.categoryReviews.push(new CategoryReview(element)),
    );*/ //OJO
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
  public getRegisterDate(): Date {
    return this.registerDate;
  }
  public getCategoryReview(): any {
    return this.categoryReview;
  }
  public setCategoryReview(value: any) {
    this.categoryReview = value;
  }
  /*public registrarComentario(): void {
    this.fecha = new Date();
  }
  public addCategoryScore(positionCategory: number, score: number): void {
    this.categoryReviews[positionCategory].setScoreCategory(score);
  }*/
}
