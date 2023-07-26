import { Score } from './score.valueObject';
import { Category } from '../model/review-property/category.enum';
import { ValueObject } from '../../../shared-kernel/core/valueObject';

export class CategoryReview extends ValueObject {
  private category: Category;
  private score: Score;
  constructor(category: string) {
    super();

    if (Object.keys(Category).includes(category) !== false) {
      throw new Error('Categoria invalida');
    }
    this.category = Category[category as keyof typeof Category];
    this.score = new Score();
  }
  public getCategory() {
    return this.category;
  }
  public setScoreCategory(score: number) {
    this.score.setScore(score);
  }
}
