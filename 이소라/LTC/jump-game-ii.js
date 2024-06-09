/*
### Approach
- index를 1씩 증가시키면서 index + nums[index]와 maxJump을 비교하여 최댓값을 갱신합니다.
- i가 prevJump와 같다면, jumpCount를 증가시키고 prevJump를 maxJump로 갱신합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumpCount = 0;
  let prevJump = 0;
  let maxJump = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxJump = Math.max(maxJump, i + nums[i]);

    if (i === prevJump) {
      jumpCount++;
      prevJump = maxJump;
    }
  }

  return jumpCount;
};
