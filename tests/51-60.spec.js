import TreeNode from '../problems/data-structures/TreeNode';

import evalExpressionTree from '../problems/51-60/problem_51';
import LRUCache from '../problems/51-60/problem_53';
import Queue from '../problems/51-60/problem_54';
import sudokuSolve from '../problems/51-60/problem_55';
import URLShortener from '../problems/51-60/problem_56';
import kColors from '../problems/51-60/problem_57';
import wordWrap from '../problems/51-60/problem_58';
import searchRotatedArray from '../problems/51-60/problem_59';
import canPartition from '../problems/51-60/problem_60';

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

  test('53: LRU Cache', () => {
    const cache = new LRUCache(2);
    cache.set(1, 1);
    cache.set(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.set(3, 3);
    expect(cache.get(2)).toBeNull();
    cache.set(4, 4);
    expect(cache.get(1)).toBeNull();
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  test('54: Implement Queue using Stacks', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);

    queue.enqueue(4);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);

    expect(() => {
      queue.dequeue();
    }).toThrow();
  });

  test('55: Sudoku Solver', () => {
    const board = [
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9']
    ];

    sudokuSolve(board);

    expect(board).toEqual([
      ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
      ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
      ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
      ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
      ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
      ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
      ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
      ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
      ['3', '4', '5', '2', '8', '6', '1', '7', '9']
    ]);
  });

  test('56: URL Shortener', () => {
    const urlShortener = new URLShortener();
    expect(urlShortener.restore(urlShortener.shorten('www.google.com'))).toBe(
      'www.google.com'
    );
  });

  test('57: M Coloring', () => {
    const graph = [
      [0, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 0, 1],
      [1, 1, 1, 1, 0]
    ];

    expect(kColors(graph, 5)).toBe(true);
    expect(kColors(graph, 4)).toBe(false);
    expect(kColors(graph, 3)).toBe(false);

    // https://github.com/JeMuGa/coding_problems/blob/main/assets/Graph-Coloring.png
    // top down left to right

    const graph1 = [
      [0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 1, 1, 0]
    ];

    expect(kColors(graph1, 4)).toBe(true);
    expect(kColors(graph1, 3)).toBe(true);
    expect(kColors(graph1, 2)).toBe(false);
  });

  test('58: Word Wrap', () => {
    expect(wordWrap('the quick brown fox jumps over the lazy dog', 10)).toEqual(
      ['the quick', 'brown fox', 'jumps over', 'the lazy', 'dog']
    );

    expect(wordWrap('the quick brown fox jumps over the lazy dog', 5)).toEqual([
      'the',
      'quick',
      'brown',
      'fox',
      'jumps',
      'over',
      'the',
      'lazy',
      'dog'
    ]);

    expect(
      wordWrap('the quick brown fox jumps over the lazy dog', 4)
    ).toBeNull();
  });

  test('59: Search in a Rotated Sorted Array', () => {
    expect(searchRotatedArray([13, 18, 25, 2, 8, 10], 8)).toBe(4);
    expect(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBeNull();
  });

  test('60: Partition Equal Subset Sum', () => {
    expect(canPartition([15, 5, 20, 10, 35, 15, 10])).toBe(true);
    expect(canPartition([5, 5, 20, 10, 35])).toBe(false);
    expect(canPartition([1, 5, 11, 5])).toBe(true);
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });
});
