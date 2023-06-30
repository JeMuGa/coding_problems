// Problem 5
//
// Given an array, return the first recurring character.
//
// Explanation:
//
// Basically we need to build a function that takes an array and it’s going to look through all
// the numbers and finds which one gets repeated first.
//
// O(N) Time Complexity
// O(N) Space Complexity
// N is the number of elements in the array
//
// For example :
// Given an array = [2, 4, 5, 1, 2, 5, 3, 7] --> It should return 2
// Given an array = [2, 1, 1, 3, 2, 5, 3, 7] --> It should return 1
// Given an array = [2, 4, 1, 7] --> returns undefined

/**
 * Returns the first positive integer in an array. 0 does not count as a positive integer
 * @param {number[]} nums
 * @return {number}
 */
function firstRecurringCharacter(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    }
    map[nums[i]] = true;
  }

  return undefined;
}

export default firstRecurringCharacter;
