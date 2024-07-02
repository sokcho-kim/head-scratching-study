/*
### Approach
- 양수 배열과 음수 배열을 만듭니다.
- 음수 배열을 오름차순으로 정렬하고, 음수 배열 길이가 홀수인 경우 가장 마지막 배열 요소를 pop합니다.
- 양수 배열과 음수 배열을 한 배열로 합치고, 배열의 모든 요소의 곱을 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const positiveNums = nums.filter(x => x > 0);
  const negativeNums = nums.filter(x => x < 0).sort((a, b) => a - b);

  if (positiveNums.length === 0 && negativeNums.length <= 1) {
    return 0;
  }

  if (negativeNums.length % 2 === 1) {
    negativeNums.pop();
  }

  const strength = [...positiveNums, ...negativeNums];

  return strength.reduce((result, num) => result * num, 1);
};
