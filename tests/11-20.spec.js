import isPermutation from "../problems/helpers/isPermutation";

import schedule from "../problems/11-20/problem_11";
import getWordsWithPrefix from "../problems/11-20/problem_12";

describe('Problems 1 to 10', () => {
  test('11: Job Scheduling', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    const callback = jest.fn();
    schedule(callback, 1000);

    expect(callback).not.toBeCalled();

    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('12: Get All Words With Prefix', () => {
    expect(
      isPermutation(getWordsWithPrefix('de', ['dog', 'deer', 'deal']), [
        'deer',
        'deal'
      ])
    ).toBe(true);

    expect(
      isPermutation(getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat']), [
        'dog',
        'deer',
        'deal'
      ])
    ).toBe(true);

    expect(getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])).toEqual([
      'cat'
    ]);

    expect(getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])).toEqual([]);

    expect(getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      []
    );
  });
});

