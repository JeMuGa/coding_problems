// Problem 16
//
// Given a stream of elements too large to store in memory,
// pick a random element from the stream with uniform probability.
//
// O(N) Time complexity
// O(1) Space complexity
// N is the number of elements in the stream

/**
 * Returns a function that for each stream of elements, selects a random element
 * @return {function}
 */
function selectRandomizer() {
  let streamCount = 0;
  let selected;

  /**
   * Returns a random element for any incoming stream
   * @param {number[]} stream
   * @return {number}
   */
  function rand(stream) {
    for (let i = 0; i < stream.length; i++) {
      streamCount++;
      if (streamCount === 0) selected = stream[i];
      else if (Math.random() <= 1 / streamCount) {
        selected = stream[i];
      }
    }
    return selected;
  }

  return rand;
}

export default selectRandomizer;
