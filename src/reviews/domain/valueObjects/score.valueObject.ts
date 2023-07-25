import { ValueObject } from '../../../shared-kernel/core/valueObject';

export class Score extends ValueObject {
  private score: number;
  constructor(score: number) {
    super();
    this.score = score;
  }
  public getScore() {
    return this.score;
  }
}
