import { ValueObject } from '../../../shared-kernel/core/valueObject';

export class Score extends ValueObject {
  private score: number;
  private readonly MAX_SCORE: number = 10;
  private readonly MIN_SCORE: number = 0;

  constructor() {
    super();
    this.score = this.MIN_SCORE;
  }
  public getScore() {
    return this.score;
  }
  public setScore(score: number) {
    if (score >= this.MIN_SCORE && score <= this.MAX_SCORE) {
      this.score = score;
    } else {
      throw new Error('score invalido');
    }
  }
}
