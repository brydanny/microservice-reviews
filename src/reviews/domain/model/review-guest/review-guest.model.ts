import { AggregateRoot } from '../../../../shared-kernel/core/aggregateRoot';

export class ReviewGuest extends AggregateRoot {
  private comentario: string;
  private fecha: Date;

  constructor(comentario: string) {
    super();
    this.comentario = comentario;
  }

  public registrarComentario(): void {
    this.fecha = new Date();
  }
}
