# Coding Problems

This is a list of generic coding problems I find usefull to practice with.

Its just a compilation of problems I find on internet. If you know a better answer or an answer in another language other than JS, feel free to add it on the file with a comment and dont forget to add the test to it plz.

Expect more to come with time.

## Problem 1

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/solutions/problem_1.js)

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

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/solutions/problem_2.js)

---