import LinkedListNode from "../problems/data-structures/LinkedListNode";

import findIntersection from "../problems/21-30/problem_21";

describe('Problems 21 to 30', () => {
  test('21: Intersection of Two Linked Lists', () => {
    let list1 = new LinkedListNode(3);
    list1.next = new LinkedListNode(7);

    let list2 = new LinkedListNode(99);
    list2.next = new LinkedListNode(1);

    let intersecting = new LinkedListNode(8);
    intersecting.next = new LinkedListNode(10);

    list1.next.next = intersecting;
    list2.next.next = intersecting;

    expect(findIntersection(list1, list2)).toEqual(intersecting);

    list1 = new LinkedListNode(4);
    list1.next = new LinkedListNode(1);

    list2 = new LinkedListNode(5);
    list2.next = new LinkedListNode(0);
    list2.next.next = new LinkedListNode(1);

    intersecting = new LinkedListNode(8);
    intersecting.next = new LinkedListNode(4);
    intersecting.next.next = new LinkedListNode(5);

    list1.next.next = intersecting;
    list2.next.next.next = intersecting;

    expect(findIntersection(list1, list2)).toEqual(intersecting);

    list1 = new LinkedListNode(0);
    list1.next = new LinkedListNode(9);
    list1.next.next = new LinkedListNode(1);

    list2 = new LinkedListNode(3);

    intersecting = new LinkedListNode(2);
    intersecting.next = new LinkedListNode(4);

    list1.next.next.next = intersecting;
    list2.next = intersecting;

    expect(findIntersection(list1, list2)).toEqual(intersecting);

    list1 = new LinkedListNode(2);
    list1.next = new LinkedListNode(6);
    list1.next.next = new LinkedListNode(4);

    list2 = new LinkedListNode(1);
    list2.next = new LinkedListNode(5);

    expect(findIntersection(list1, list2)).toBeNull();

    list1 = new LinkedListNode(1);
    list2 = null;
    expect(findIntersection(list1, list2)).toBeNull();
  });
});
