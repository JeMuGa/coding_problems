import TreeNode from '../solutions/data-structures/TreeNode';

import twoSum from '../solutions/problem_1';
import { serialize, deserialize } from '../solutions/problem_2';
import firstMissingPositiveInteger from '../solutions/problem_3';
import productExceptSelf from '../solutions/problem_4';

describe('Solutions', () => {
  test('1: Two Sum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toBe(true);
    expect(twoSum([], 19)).toBe(false);
    expect(twoSum([2, 11, 99, 15], 26)).toBe(true);
    expect(twoSum([2, 11, 99, 16], 26)).toBe(false);
  });

  test('2: Serialize And Deserialize Binary Tree', () => {
    expect(deserialize(serialize(null))).toBeNull();

    const node = new TreeNode(
      'root',
      new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
    );

    expect(deserialize(serialize(node))).toEqual(node);
    expect(deserialize(serialize(node)).left.left.val).toEqual('left.left');
  });

  test('3: First Missing Positive Integer', () => {
    expect(firstMissingPositiveInteger([3, 4, -1, 1])).toBe(2);
    expect(firstMissingPositiveInteger([1, 2, 0])).toBe(3);
    expect(firstMissingPositiveInteger([0, 6, -1, 5, 4])).toBe(1);
    expect(firstMissingPositiveInteger([1, 2, 3, 4])).toBe(5);
    expect(firstMissingPositiveInteger([1, 2, 4, 5])).toBe(3);
    expect(firstMissingPositiveInteger([-1, -2, -4, -5])).toBe(1);
    expect(firstMissingPositiveInteger([7, 8, 9, 11, 12])).toBe(1);
  });

  test('4: Product', () => {
    expect(productExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    expect(productExceptSelf([3, 2, 1])).toEqual([2, 3, 6]);
    expect(productExceptSelf([1])).toEqual([1]);
    expect(productExceptSelf([])).toEqual([]);
  });
});
