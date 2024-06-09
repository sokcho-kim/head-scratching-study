/*
### Approach
- nums 배열을 순회하면서 sum에서 right 인덱스의 값을 더합니다.
- 합이 target보다 클 경우, sum에서 left 인덱스의 값을 빼고 left 인덱스를 늘립니다.
- 최소길이 minLength와 right - left + 1를 비교하면서 최솟값을 갱신합니다.

### Complexity
- Time complexity : O(N * K)
- Space complexity : O(1)
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;

  return 0;
};
