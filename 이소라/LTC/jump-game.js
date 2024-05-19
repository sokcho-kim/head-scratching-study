/*
### Approach
- index를 1씩 증가시키면서 index + nums[index]와 maxStep을 비교하여 최댓값을 갱신합니다.
- index가 nums 배열 마지막 인덱스에 도달하면 true를 반환합니다.
- nums[index] 값이 0이고, 현재 index가 maxStep보다 크다면 더 이상 움직일 수 없으므로 false를 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let index = 0;
  let maxStep = 0;

  while (index < nums.length) {
    maxStep = Math.max(maxStep, index + nums[index]);

    if (index >= nums.length - 1) {
      return true;
    }

    if (index >= maxStep && nums[index] === 0) {
      return false;
    }

    index++;
  }

  return false;
};
