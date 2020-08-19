/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */
let result = [];
const combinationSumRecursive = (
  candidates,
  target,
  results = [],) => { let solution = results.reduce((a, b) => a + b, 0);

  if (solution === target) {
    result.push(Array.from(results))
  }
  if (solution >= target) {
    return;
  }

  for (let i = 0; i < candidates.length; i++) {
    let num = candidates[i];
    let candidatesTests = candidates.slice(i);
    combinationSumRecursive(candidatesTests, target, results.concat([num]));

  }
  return result;
};


  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  const combinationSum = (candidates, target) => {
    result = [];
    return combinationSumRecursive(candidates, target);
  };

module.exports = combinationSum;