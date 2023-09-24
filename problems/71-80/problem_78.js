// Problem 78
//
// Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.
//
// https://en.wikipedia.org/wiki/K-way_merge_algorithm
//
// O(N log K) Time complexity
// O(K) Space complexity
// K is number of sorted linked list and N is the total of nodes

import Heap from '../data-structures/Heap';
import LinkedListNode from '../data-structures/LinkedListNode';

/**
 * Returns a merged linked list of an array of linked list
 * @param {LinkedListNode<LinkedListNode>} lists
 * @return {LinkedListNode}
 */
function mergeKLists(lists) {
  // Use a min heap
  const minHeap = new Heap((x, y) => y.val - x.val);

  // store
  for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    minHeap.add(list);
  }

  const dummy = new LinkedListNode(0);
  let sentinel = dummy;
  while (minHeap.size() !== 0) {
    // everything polled will be the smallest sorted node
    const minNode = minHeap.poll();
    sentinel.next = minNode;
    sentinel = sentinel.next;

    if (minNode.next !== null) {
      minHeap.add(minNode.next);
    }
  }

  return dummy.next;
}

export default mergeKLists;
