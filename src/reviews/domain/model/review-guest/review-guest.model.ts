import { AggregateRoot } from '../../../../shared-kernel/core/aggregateRoot';
import { Score } from '../../valueObjects/score.valueObject';

export class ReviewGuest extends AggregateRoot {
  private hostId: string;
  private huespedId: string;
  private comentario: string;
  private fecha: Date;
  private score: Score;

  constructor(comentario: string, huespedId: string, hostId: string) {
    super();
    this.comentario = comentario;
    this.hostId = hostId;
    this.huespedId = huespedId;
  }

  public registrarComentario(): void {
    this.fecha = new Date();
  }
  public addScore(score: number) {
    this.score.setScore(score);
  }
}
