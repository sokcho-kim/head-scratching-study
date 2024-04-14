/*
### Approach
- i번째부터 k개의 숫자의 평균값을 구합니다.
- k번째부터 한 칸씩 이동하면서 평균값을 비교하여 더 큰 평균값으로 갱신합니다.
- 최대 평균값을 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  maxSum = sum / k;

  for (let j = k; j < nums.length; j++) {
    sum += nums[j] - nums[j - k];
    maxSum = Math.max(maxSum, sum / k);
  }

  return maxSum;
};
