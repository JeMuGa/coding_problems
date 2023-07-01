import schedule from "../problems/11-20/problem_11";

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
});

