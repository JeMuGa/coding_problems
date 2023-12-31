import TreeNode from "../problems/data-structures/TreeNode";

import singleNumber from "../problems/41-50/problem_41";
import constructItinerary from "../problems/41-50/problem_42";
import subsetSum from "../problems/41-50/problem_43";
import MaxStack from "../problems/41-50/problem_44";
import countInversions from "../problems/41-50/problem_45";
import longestPalindrome from "../problems/41-50/problem_47";
import maxProfit from "../problems/41-50/problem_48";
import constructTree from "../problems/41-50/problem_49";
import maxSumSubarray from "../problems/41-50/problem_50";

describe('Problems 41 to 50', () => {
  test('41: Single Number', () => {
    expect(singleNumber([6, 1, 3, 3, 3, 6, 6])).toBe(1);
    expect(singleNumber([13, 19, 13, 13])).toBe(19);
  });

  test('42: Reconstruct Itinerary', () => {
    expect(
      constructItinerary(
        [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']],
        'YUL'
      )
    ).toEqual(['YUL', 'YYZ', 'SFO', 'HKO', 'ORD']);

    expect(
      constructItinerary([['SFO', 'COM'], ['COM', 'YYZ']], 'COM')
    ).toBeNull();

    expect(
      constructItinerary([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']], 'A')
    ).toEqual(['A', 'B', 'C', 'A', 'C']);

    expect(
      constructItinerary(
        [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']],
        'JFK'
      )
    ).toEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC']);

    expect(
      constructItinerary(
        [
          ['JFK', 'SFO'],
          ['JFK', 'ATL'],
          ['SFO', 'ATL'],
          ['ATL', 'JFK'],
          ['ATL', 'SFO']
        ],
        'JFK'
      )
    ).toEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']);
  });

  test('43: Subset Sum', () => {
    expect(subsetSum([12, 1, 61, 5, 9, 2], 24)).toEqual([12, 1, 9, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 15)).toEqual([1, 5, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 16)).toEqual([5, 9, 2]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 17)).toEqual([12, 5]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 18)).toEqual([12, 1, 5]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 19)).toEqual([12, 5, 2]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 20)).toEqual([12, 1, 5, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 21)).toEqual([12, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 22)).toEqual([12, 1, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 23)).toEqual([12, 9, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 25)).toBeNull();

    expect(subsetSum([2, 3, 7, 8, 10], 9)).toEqual([2, 7]);
    expect(subsetSum([2, 3, 7, 8, 10], 10)).toEqual([10]);
    expect(subsetSum([2, 3, 7, 8, 10], 11)).toEqual([3, 8]);

    expect(subsetSum([2, 3, 7, 8, 10], 30)).toEqual([2, 3, 7, 8, 10]);

    expect(subsetSum([2, 3, 7, 8, 10], 14)).toBeNull();
  });

  test('44: Max Stack', () => {
    const maxStack = new MaxStack();
    maxStack.push(-2);
    maxStack.push(0);
    maxStack.push(-3);
    expect(maxStack.max()).toBe(0);
    expect(maxStack.pop()).toBe(-3);
    expect(maxStack.max()).toBe(0);
    expect(maxStack.pop()).toBe(0);
    expect(maxStack.max()).toBe(-2);
    expect(maxStack.pop()).toBe(-2);
    expect(maxStack.max()).toBeNull();
    expect(maxStack.pop()).toBeNull();
  });

  test('45: Count Inversions', () => {
    expect(countInversions([1, 2, 3, 4, 5])).toBe(0);
    expect(countInversions([2, 4, 1, 3, 5])).toBe(3);
    expect(countInversions([5, 4, 3, 2, 1])).toBe(10);
  });

  test('47: Longest Palindrome', () => {
    expect(longestPalindrome('aabcdcb')).toBe('bcdcb');
    expect(longestPalindrome('bananas')).toBe('anana');
    expect(longestPalindrome('banana')).toBe('anana');
    expect(longestPalindrome('bbbbccc')).toBe('bbbb');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(['aba', 'bab']).toEqual(
      expect.arrayContaining([longestPalindrome('babad')])
    );
    expect(['a', 'b', 'c', 'd']).toEqual(
      expect.arrayContaining([longestPalindrome('abcd')])
    );
  });

  test('48: Best Time To Buy and Sell Stock', () => {
    expect(maxProfit([9, 11, 8, 5, 7, 10])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([])).toBe(0);
  });

  test('49: Construct Binary Tree from Preorder and Inorder Traversal', () => {
    const tree = new TreeNode('a');
    tree.left = new TreeNode('b');
    tree.right = new TreeNode('c');
    tree.left.left = new TreeNode('d');
    tree.left.right = new TreeNode('e');
    tree.right.left = new TreeNode('f');
    tree.right.right = new TreeNode('g');
    expect(
      constructTree(
        ['a', 'b', 'd', 'e', 'c', 'f', 'g'],
        ['d', 'b', 'e', 'a', 'f', 'c', 'g']
      )
    ).toEqual(tree);

    const tree1 = new TreeNode('a');
    tree1.left = new TreeNode('b');
    tree1.right = new TreeNode('c');
    tree1.right.left = new TreeNode('d');
    tree1.right.right = new TreeNode('e');
    expect(
      constructTree(['a', 'b', 'c', 'd', 'e'], ['b', 'a', 'd', 'c', 'e'])
    ).toEqual(tree1);
  });

  test('50: Maximum Sum Subarray', () => {
    expect(maxSumSubarray([34, -50, 42, 14, -5, 86])).toBe(137);
    expect(maxSumSubarray([-5, -1, -8, -9])).toBe(0);
    expect(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
