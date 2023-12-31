import TreeNode from '../problems/data-structures/TreeNode';

import twoSum from '../problems/01-10/problem_1';
import { serialize, deserialize } from '../problems/01-10/problem_2';
import firstMissingPositiveInteger from '../problems/01-10/problem_3';
import productExceptSelf from '../problems/01-10/problem_4';
import firstRecurringCharacter from '../problems/01-10/problem_5';
import { cons, car, cdr } from '../problems/01-10/problem_6';
import numDecodings from '../problems/01-10/problem_8';
import countUnivalSubtrees from '../problems/01-10/problem_9';
import sumNonAdjacent from '../problems/01-10/problem_10';

describe('Problems 1 to 10', () => {
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

  test('5: First recurring character', () => {
    expect(firstRecurringCharacter([2, 4, 5, 1, 2, 5, 3, 7])).toEqual(2);
    expect(firstRecurringCharacter([2, 1, 1, 3, 2, 5, 3, 7])).toEqual(1);
    expect(firstRecurringCharacter([2, 4, 1, 7])).toEqual(undefined);
    expect(firstRecurringCharacter([])).toEqual(undefined);
  });

  test('6: Pairs', () => {
    expect(car(cons(3, 4))).toBe(3);
    expect(cdr(cons(3, 4))).toBe(4);
  });

  test('8: Decode Message', () => {
    expect(numDecodings('111')).toBe(3);
    expect(numDecodings('12')).toBe(2);
    expect(numDecodings('8')).toBe(1);
    expect(numDecodings('26')).toBe(2);
    expect(numDecodings('27')).toBe(1);
    expect(numDecodings('226')).toBe(3);
    expect(numDecodings('10')).toBe(1);
    expect(numDecodings('11')).toBe(2);
    expect(numDecodings('34')).toBe(1);
    expect(numDecodings('0')).toBe(0);
    expect(numDecodings('1')).toBe(1);
  });

  test('9: Count Unival Subtrees', () => {
    const node = new TreeNode(0);
    node.left = new TreeNode(1);
    node.right = new TreeNode(0);
    node.right.left = new TreeNode(1);
    node.right.right = new TreeNode(0);
    node.right.left.left = new TreeNode(1);
    node.right.left.right = new TreeNode(1);

    expect(countUnivalSubtrees(node)).toBe(5);

    const node1 = new TreeNode(0);
    node1.left = new TreeNode(0);
    node1.right = new TreeNode(0);
    node1.right.left = new TreeNode(0);
    node1.right.right = new TreeNode(0);
    node1.right.right.right = new TreeNode(1);

    expect(countUnivalSubtrees(node1)).toBe(3);

    const node2 = new TreeNode(0);
    node2.left = new TreeNode(2);
    node2.right = new TreeNode(1);
    node2.right.left = new TreeNode(1);
    node2.right.right = new TreeNode(1);
    node2.right.right.right = new TreeNode(1);

    expect(countUnivalSubtrees(node2)).toBe(5);

    const node3 = new TreeNode(0);
    expect(countUnivalSubtrees(node3)).toBe(1);

    const node4 = new TreeNode(0);
    node4.left = new TreeNode(0);
    expect(countUnivalSubtrees(node4)).toBe(2);

    const node5 = new TreeNode(0);
    node5.left = new TreeNode(1);
    expect(countUnivalSubtrees(node5)).toBe(1);

    const node6 = new TreeNode(0);
    node6.left = new TreeNode(0);
    node6.right = new TreeNode(0);
    expect(countUnivalSubtrees(node6)).toBe(3);

    const node7 = new TreeNode(0);
    node7.left = new TreeNode(1);
    node7.right = new TreeNode(2);
    expect(countUnivalSubtrees(node7)).toBe(2);
  });

  test('10: Non Adjacent Sums', () => {
    expect(sumNonAdjacent([2, 4, 6, 2, 5])).toBe(13);
    expect(sumNonAdjacent([5, 1, 1, 5])).toBe(10);
    expect(sumNonAdjacent([5])).toBe(5);
    expect(sumNonAdjacent([5, 6])).toBe(6);
    expect(sumNonAdjacent([6, 5])).toBe(6);

    expect(sumNonAdjacent([0, -4, -2])).toBe(0);
    expect(sumNonAdjacent([0, -2, -4])).toBe(0);
    expect(sumNonAdjacent([0, 0, -4])).toBe(0);
    expect(sumNonAdjacent([-5, -1, -1, -5])).toBe(0);
    expect(sumNonAdjacent([-5, -1, 1, -5])).toBe(1);

    expect(sumNonAdjacent([2, 4, -6, 2, 5])).toBe(9);
    expect(sumNonAdjacent([2, 4, -6, 5, 2])).toBe(9);
    expect(sumNonAdjacent([2, 4, -6, -5, 4])).toBe(8);
    expect(sumNonAdjacent([3, 5, -7, 8, 10])).toBe(15);
    expect(sumNonAdjacent([-3])).toBe(0);
  });
});

