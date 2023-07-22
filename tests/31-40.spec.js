import trappingRainWater from "../problems/31-40/problem_31";

describe('Problems 31 to 40', () => {
  test('31: Trapping Rain Water', () => {
    expect(trappingRainWater([2, 1, 2])).toBe(1);
    expect(trappingRainWater([3, 0, 1, 3, 0, 5])).toBe(8);
    expect(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
});
