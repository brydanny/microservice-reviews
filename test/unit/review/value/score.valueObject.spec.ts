import { Score } from '../../../../src/reviews/domain/valueObjects/score.valueObject';

describe('Score ValueObject', () => {
  test('Creacion score con la validad minima de cero', () => {
    const actualScore: Score = new Score();

    expect(actualScore.getScore()).toBe(0);
  });

  test('Se e score con la validad minima de cero', () => {
    const actualScore: Score = new Score();
    actualScore.setScore(5);

    expect(actualScore.getScore()).toBe(5);
  });
  test('score invalido', () => {
    try {
      const actualScore: Score = new Score();
      actualScore.setScore(-1);
    } catch (error) {
      expect(() => {
        throw error;
      }).toThrowError('score invalido');
    }
  });
  test('score invalido mayor a 10', () => {
    try {
      const actualScore: Score = new Score();
      actualScore.setScore(11);
    } catch (error) {
      expect(() => {
        throw error;
      }).toThrowError('score invalido');
    }
  });
});
