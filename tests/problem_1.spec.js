import twoSum from "../problems/problem_1";

describe("Problems 1", () => {
  test("Two Sum", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toBe(true);
    expect(twoSum([], 19)).toBe(false);
    expect(twoSum([2, 11, 99, 15], 26)).toBe(true);
    expect(twoSum([2, 11, 99, 16], 26)).toBe(false);
  });
});
