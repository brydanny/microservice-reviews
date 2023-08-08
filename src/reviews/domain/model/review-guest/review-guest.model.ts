import { AggregateRoot } from '@nestjs/cqrs';
//import { Score } from '../../valueObjects/score.valueObject';
import { CategoryReview } from './category';

export class ReviewGuest extends AggregateRoot {
  private hostId: string;
  private huespedId: string;
  private comentario: string;
  private registerDate: Date;
  private categoryReview: CategoryReview;

  constructor(
    comentario: string,
    huespedId: string,
    hostId: string,
    categoryReview: any,
  ) {
    super();
    this.comentario = comentario;
    this.huespedId = huespedId;
    this.hostId = hostId;
    this.registerDate = new Date();
    this.categoryReview = categoryReview;
  }

  public getHostId(): string {
    return this.hostId;
  }
  public setHostId(value: string) {
    this.hostId = value;
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
  /* public registrarComentario(): void {
    this.registerDate = new Date();
  }*/
}
