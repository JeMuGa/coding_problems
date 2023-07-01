# Coding Problems

This is a list of generic coding problems I find usefull to practice with.

Its just a compilation of problems I find on internet. If you know a better answer or an answer in another language other than JS, feel free to do a Pull-Request to add it with a comment and dont forget to add the test to it.

---

## Problem 1

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_1.js)

---

## Problem 2

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

```javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

The following test should pass:

```javascript
const node = new TreeNode(
  'root',
  new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
);
expect(deserialize(serialize(node)).left.left.val).toEqual('left.left'); // Jest Testing
```

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_2.js)

---

## Problem 3

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_3.js)

---

## Problem 4

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_4.js)

---

## Problem 5

Given an array, return the first recurring character.

For example, if our input was [2, 4, 5, 1, 2, 5, 3, 7], the expected return should be 2. If our input was [2, 1, 1, 3, 2, 5, 3, 7] the expected return should be 1.
If the input has no recurring characters then it should return undefined.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_5.js)

---

## Problem 6

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.

For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

```javascript
function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}
```

Implement car and cdr.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_6.js)

---

## Problem 7

An XOR linked list is a more memory efficient doubly linked list.
Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node.

Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Javascript), you can assume you have access to getPointer and dereferencePointer functions that converts between nodes and memory addresses.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_7.js)

---

## Problem 8

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_8.js)

---

## Problem 9

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

```
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
```

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_9.js)

---

## Problem 10

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/01-10/problem_10.js)

---

## Problem 11

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_11.js)


---
