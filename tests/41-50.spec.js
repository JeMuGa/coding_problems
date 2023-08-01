import singleNumber from "../problems/41-50/problem_41";

describe('Problems 41 to 50', () => {
  test('41: Single Number', () => {
    expect(singleNumber([6, 1, 3, 3, 3, 6, 6])).toBe(1);
    expect(singleNumber([13, 19, 13, 13])).toBe(19);
  });
});
