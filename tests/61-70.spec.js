
import pow from "../problems/61-70/problem_61";
import uniquePaths from "../problems/61-70/problem_62";

describe('Problems 61 - 70', () => {
  test('61: Pow(x, y)', () => {
    expect(pow(2, 10)).toBe(1024);
    expect(pow(2, -2)).toBe(0.25);
  });

  test('62: Unique Paths', () => {
    expect(uniquePaths(2, 2)).toBe(2);
    expect(uniquePaths(5, 5)).toBe(70);
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths(7, 3)).toBe(28);
  });
});

