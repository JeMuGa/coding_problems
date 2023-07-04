import isPermutation from "../problems/helpers/isPermutation";

import schedule from "../problems/11-20/problem_11";
import getWordsWithPrefix from "../problems/11-20/problem_12";
import { climbStairs1, climbStairs2 } from "../problems/11-20/problem_13";
import kLongestSubstring from "../problems/11-20/problem_14";

describe('Problems 1 to 10', () => {
  test('11: Job Scheduling', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    const callback = jest.fn();
    schedule(callback, 1000);

    expect(callback).not.toBeCalled();

    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('12: Get All Words With Prefix', () => {
    expect(
      isPermutation(getWordsWithPrefix('de', ['dog', 'deer', 'deal']), [
        'deer',
        'deal'
      ])
    ).toBe(true);

    expect(
      isPermutation(getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat']), [
        'dog',
        'deer',
        'deal'
      ])
    ).toBe(true);

    expect(getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])).toEqual([
      'cat'
    ]);

    expect(getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])).toEqual([]);

    expect(getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      []
    );
  });

  test('13: Climbing Stairs', () => {
    expect(climbStairs1(4)).toBe(5);
    expect(climbStairs2(4, [1, 2])).toBe(5);

    expect(climbStairs2(4, [1, 2, 3])).toBe(7);
    expect(climbStairs2(7, [1, 3, 5])).toBe(12);
  });

  test('14: Longest Substring With K Distinct Characters', () => {
    expect(kLongestSubstring('abcba', 2)).toBe('bcb');
    expect(kLongestSubstring('abaacca', 2)).toBe('aacca');
    expect(kLongestSubstring('eceba', 2)).toBe('ece');

    // can be any one of these values
    expect(['aa', 'bb', 'cc']).toContain(kLongestSubstring('aabbcc', 1));
    expect(['aabb', 'bbcc']).toContain(kLongestSubstring('aabbcc', 2));
    expect(kLongestSubstring('aabbcc', 3)).toBe('aabbcc');
    expect(kLongestSubstring('aaaccc', 2)).toBe('aaaccc');

    expect(kLongestSubstring('abcbbbbcccbdddadacb', 2)).toBe('bcbbbbcccb');
    expect(kLongestSubstring('abcadcacacaca', 3)).toBe('cadcacacaca');
  });
});

