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

## Problem 12

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings,
return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_12.js)

---

## Problem 13

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways you can climb the staircase.
The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

- 1, 1, 1, 1
- 2, 1, 1
- 1, 2, 1
- 1, 1, 2
- 2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X?
For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_13.js)

---

## Problem 14

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_14.js)

---

## Problem 15

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_15.js)

---

## Problem 16

Given a stream of elements too large to store in memory,
pick a random element from the stream with uniform probability.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_16.js)

---

## Problem 17

You run an e-commerce website and want to record the last N order ids in a log.
Implement a data structure to accomplish this, with the following API:

- record(order_id): adds the order_id to the log
- get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_17.js)

---

## Problem 18

Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

```
dir
    subdir1
    subdir2
        file.ext
```

The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

```
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
```

The directory dir contains two sub-directories subdir1 and subdir2.

subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1.
subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system.

For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext",
and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format,
return the length of the longest absolute path to a file in the abstracted file system.

If there is no file in the system, return 0.


Note:

The name of a file contains at least a period and an extension.
The name of a directory or sub-directory will not contain a period.


[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_18.js)

---

## Problem 19

Given an array of integers and a number k, where 1 <= k <= length of the array,
compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

- 10 = max(10, 5, 2)
- 7 = max(5, 2, 7)
- 8 = max(2, 7, 8)
- 8 = max(7, 8, 7)

Do this in O(n) time and O(k) space.
You can modify the input array in-place and you do not need to store the results.
You can simply print them out as you compute them.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_19.js)

---

## Problem 20

A builder is looking to build a row of N houses that can be of K different colors.
He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color,
return the minimum cost which achieves this goal.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/11-20/problem_20.js)

---

## Problem 21

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/21-30/problem_21.js)

---

## Problem 22

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

[Solution](https://github.com/JeMuGa/coding_problems/blob/main/problems/21-30/problem_22.js)

---

