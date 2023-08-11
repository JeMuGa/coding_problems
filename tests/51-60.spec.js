import TreeNode from '../problems/data-structures/TreeNode';

import evalExpressionTree from '../problems/51-60/problem_51';

describe('Problems 51 - 60', () => {
  test('51: Evaluate Expression Tree', () => {
    let tree = new TreeNode('*');
    tree.left = new TreeNode('+');
    tree.right = new TreeNode('+');
    tree.left.left = new TreeNode(3);
    tree.left.right = new TreeNode(2);
    tree.right.left = new TreeNode(4);
    tree.right.right = new TreeNode(5);

    expect(evalExpressionTree(tree)).toBe(45);

    tree = new TreeNode('+');
    tree.left = new TreeNode(3);
    tree.right = new TreeNode('*');
    tree.right.left = new TreeNode('+');
    tree.right.right = new TreeNode(2);
    tree.right.left.left = new TreeNode(5);
    tree.right.left.right = new TreeNode(9);
    expect(evalExpressionTree(tree)).toBe(31);

    tree = new TreeNode(10);
    expect(evalExpressionTree(tree)).toBe(10);

    tree = new TreeNode('+');
    tree.left = new TreeNode('*');
    tree.right = new TreeNode(4);
    tree.left.left = new TreeNode('+');
    tree.left.right = new TreeNode(3);
    tree.left.left.left = new TreeNode(2);
    tree.left.left.right = new TreeNode(1);
    expect(evalExpressionTree(tree)).toBe(13);
  });
});
