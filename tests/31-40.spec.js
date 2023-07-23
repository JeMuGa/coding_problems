import trappingRainWater from "../problems/31-40/problem_31";
import editDistance from "../problems/31-40/problem_32";

describe('Problems 31 to 40', () => {
  test('31: Trapping Rain Water', () => {
    expect(trappingRainWater([2, 1, 2])).toBe(1);
    expect(trappingRainWater([3, 0, 1, 3, 0, 5])).toBe(8);
    expect(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test('32: Edit Distance', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3);
    expect(editDistance('', '')).toBe(0);
    expect(editDistance('', 'abcd')).toBe(4);
    expect(editDistance('abcd', 'abcd')).toBe(0);
    expect(editDistance('horse', 'ros')).toBe(3);
    expect(editDistance('intention', 'execution')).toBe(5);
  });
});
