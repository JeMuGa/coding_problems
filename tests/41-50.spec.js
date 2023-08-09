import singleNumber from "../problems/41-50/problem_41";
import constructItinerary from "../problems/41-50/problem_42";
import subsetSum from "../problems/41-50/problem_43";

describe('Problems 41 to 50', () => {
  test('41: Single Number', () => {
    expect(singleNumber([6, 1, 3, 3, 3, 6, 6])).toBe(1);
    expect(singleNumber([13, 19, 13, 13])).toBe(19);
  });

  test('42: Reconstruct Itinerary', () => {
    expect(
      constructItinerary(
        [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']],
        'YUL'
      )
    ).toEqual(['YUL', 'YYZ', 'SFO', 'HKO', 'ORD']);

    expect(
      constructItinerary([['SFO', 'COM'], ['COM', 'YYZ']], 'COM')
    ).toBeNull();

    expect(
      constructItinerary([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']], 'A')
    ).toEqual(['A', 'B', 'C', 'A', 'C']);

    expect(
      constructItinerary(
        [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']],
        'JFK'
      )
    ).toEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC']);

    expect(
      constructItinerary(
        [
          ['JFK', 'SFO'],
          ['JFK', 'ATL'],
          ['SFO', 'ATL'],
          ['ATL', 'JFK'],
          ['ATL', 'SFO']
        ],
        'JFK'
      )
    ).toEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']);
  });

  test('43: Subset Sum', () => {
    expect(subsetSum([12, 1, 61, 5, 9, 2], 24)).toEqual([12, 1, 9, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 15)).toEqual([1, 5, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 16)).toEqual([5, 9, 2]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 17)).toEqual([12, 5]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 18)).toEqual([12, 1, 5]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 19)).toEqual([12, 5, 2]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 20)).toEqual([12, 1, 5, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 21)).toEqual([12, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 22)).toEqual([12, 1, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 23)).toEqual([12, 9, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 25)).toBeNull();

    expect(subsetSum([2, 3, 7, 8, 10], 9)).toEqual([2, 7]);
    expect(subsetSum([2, 3, 7, 8, 10], 10)).toEqual([10]);
    expect(subsetSum([2, 3, 7, 8, 10], 11)).toEqual([3, 8]);

    expect(subsetSum([2, 3, 7, 8, 10], 30)).toEqual([2, 3, 7, 8, 10]);

    expect(subsetSum([2, 3, 7, 8, 10], 14)).toBeNull();
  });
});
