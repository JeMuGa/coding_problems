import TreeNode from '../solutions/data-structures/TreeNode';

import twoSum from '../solutions/problem_1';
import { serialize, deserialize } from '../solutions/problem_2';

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
});
