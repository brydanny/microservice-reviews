import { ValueObject } from '../../../shared-kernel/core/valueObject';

export class CategoryReview extends ValueObject {
  private category: string;
  constructor(category: string) {
    super();
    this.category = category;
  }
  public getCategory() {
    return this.category;
  }
}
