import isPermutation from "../problems/helpers/isPermutation";

import schedule from "../problems/11-20/problem_11";
import getWordsWithPrefix from "../problems/11-20/problem_12";
import { climbStairs1, climbStairs2 } from "../problems/11-20/problem_13";
import kLongestSubstring from "../problems/11-20/problem_14";
import selectRandomizer from "../problems/11-20/problem_16";
import Log from "../problems/11-20/problem_17";
import longestFilePath from "../problems/11-20/problem_18";
import maxSubArrayLengthK from "../problems/11-20/problem_19";
import minCostHouseColor from "../problems/11-20/problem_20";

describe('Problems 11 to 20', () => {
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

  test('16: Select Random Element From Stream of Elements', () => {
    const stream1 = [1, 2, 3, 4, 5];
    const stream2 = [6, 7, 8, 9, 10];
    const stream3 = [11, 12, 13, 14, 15];
    const randomizer = selectRandomizer();

    const rand1 = randomizer(stream1);
    const rand2 = randomizer(stream2);
    const rand3 = randomizer(stream3);

    expect([1, 2, 3, 4, 5]).toContain(rand1);
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(rand2);
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).toContain(
      rand3
    );
  });

  test('17: Record and Get ith last element', () => {
    const orderLog = new Log(5);
    orderLog.record(111);
    orderLog.record(222);
    orderLog.record(333);
    orderLog.record(444);
    orderLog.record(555);

    expect(orderLog.getLast(1)).toBe(555);
    expect(orderLog.getLast(2)).toBe(444);
    expect(orderLog.getLast(3)).toBe(333);
    expect(orderLog.getLast(4)).toBe(222);
    expect(orderLog.getLast(5)).toBe(111);

    orderLog.record(666);
    orderLog.record(777);

    expect(orderLog.getLast(1)).toBe(777);
    expect(orderLog.getLast(2)).toBe(666);
    expect(orderLog.getLast(3)).toBe(555);
    expect(orderLog.getLast(4)).toBe(444);
    expect(orderLog.getLast(5)).toBe(333);
  });

  test('18: Get the Longest Absolute Path to a File', () => {
    expect(
      longestFilePath(
        'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
      )
    ).toBe(32);

    expect(
      longestFilePath(
        'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext\n\t\t\tfile22.ext'
      )
    ).toBe(33);

    expect(
      longestFilePath(
        'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir11\n\t\t\tfile11.ext\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext\n\t\t\tfile22.ext'
      )
    ).toBe(34);

    expect(longestFilePath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext')).toBe(20);

    expect(longestFilePath('dir\n\tsubdir1\n\tsubdir2\n\tsubdir3')).toBe(0);

    expect(
      longestFilePath('dir\n\tsubdir1\n\t\tsubsubdir1\n\tsubdir2\n\tsubdir3')
    ).toBe(0);

    expect(longestFilePath('dir')).toBe(0);
    expect(longestFilePath('dir\n\tfile1.txt')).toBe(13);
  });

  test('19: Maximum Values of each SubArray of Length k', () => {
    expect(maxSubArrayLengthK([10, 5, 2, 7, 8, 7], 3)).toEqual([10, 7, 8, 8]);
    expect(maxSubArrayLengthK([10, 5, 2, 7, 8, 7], 1)).toEqual([
      10,
      5,
      2,
      7,
      8,
      7
    ]);

    expect(maxSubArrayLengthK([10, 5, 2, 7, 8, 7], 2)).toEqual([
      10,
      5,
      7,
      8,
      8
    ]);
    expect(maxSubArrayLengthK([11, 22], 2)).toEqual([22]);
    expect(maxSubArrayLengthK([11, 33, 22], 3)).toEqual([33]);

    expect(maxSubArrayLengthK([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3,
      3,
      5,
      5,
      6,
      7
    ]);
  });

  test('20: Paint House in Color With Minimal Cost', () => {
    expect(minCostHouseColor([[17, 2, 17], [16, 16, 5], [14, 3, 9]])).toBe(10);

    expect(
      minCostHouseColor([
        [8, 6, 6, 7, 5, 4],
        [7, 7, 8, 2, 2, 2],
        [9, 9, 4, 3, 2, 1]
      ])
    ).toBe(7);

    expect(
      minCostHouseColor([
        [7, 3, 3, 8, 1, 2],
        [2, 3, 4, 2, 4, 3],
        [4, 5, 9, 8, 1, 6],
        [6, 7, 9, 8, 1, 4]
      ])
    ).toBe(8);
  });
});

