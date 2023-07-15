import isEqual from "lodash.isequal";
import LinkedListNode from "../problems/data-structures/LinkedListNode";

import findIntersection from "../problems/21-30/problem_21";
import minRooms from "../problems/21-30/problem_22";
import wordBreak from "../problems/21-30/problem_23";
import findMinPath from "../problems/21-30/problem_24";

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

  test('22: Minimum Rooms Required', () => {
    expect(minRooms([[30, 75], [0, 50], [60, 150]])).toBe(2);
    expect(minRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
    expect(minRooms([[0, 30], [30, 40], [15, 20]])).toBe(2);
    expect(minRooms([[0, 50], [0, 10], [0, 20]])).toBe(3);
    expect(minRooms([[0, 30], [30, 40], [40, 50]])).toBe(1);
    expect(minRooms([])).toBe(0);
  });

  test('23: Build String', () => {
    expect(
      wordBreak('thequickbrownfox', ['the', 'quick', 'brown', 'fox'])
    ).toEqual(['the', 'quick', 'brown', 'fox']);

    expect(
      wordBreak('thequickbrownfoxx', ['the', 'quick', 'brown', 'fox'])
    ).toBeNull();

    expect(
      isEqual(
        wordBreak('bedbathandbeyond', [
          'bed',
          'bath',
          'bedbath',
          'and',
          'beyond'
        ]),
        ['bed', 'bath', 'and', 'beyond']
      ) ||
        isEqual(
          wordBreak('bedbathandbeyond', [
            'bed',
            'bath',
            'bedbath',
            'and',
            'beyond'
          ]),
          ['bedbath', 'and', 'beyond']
        )
    ).toBe(true);
  });
  
  test('24: Find the Minimum Path', () => {
    expect(
      findMinPath(
        [[0, 0, 0, 0], [1, 1, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
        [3, 0],
        [0, 0]
      )
    ).toBe(7);

    expect(
      findMinPath(
        [[0, 0, 0, 0], [1, 1, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
        [3, 3],
        [0, 0]
      )
    ).toBe(6);

    expect(
      findMinPath(
        [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
        [3, 0],
        [0, 0]
      )
    ).toBe(-1);

    expect(
      findMinPath(
        [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
        [0, 0],
        [0, 3]
      )
    ).toBe(3);

    expect(
      findMinPath(
        [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
        [3, 0],
        [3, 0]
      )
    ).toBe(0);

    expect(
      findMinPath(
        [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
        [3, 0],
        [3, 3]
      )
    ).toBe(3);
  });
});
