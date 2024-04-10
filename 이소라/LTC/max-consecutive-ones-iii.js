/*
### Approach
- right 인덱스를 0부터 1씩 늘려가면서 nums 배열을 순회합니다.
- right 인덱스 요소가 0인 경우, 1로 뒤집어야 하므로 k에서 1을 뺍니다.
- k가 음수인 경우, left 인덱스를 1을 더해줍니다.
  - 이때 left 인덱스 요소가 0인 경우, 1로 뒤집은 것을 취소하므로 k에서 1을 더해줍니다.
- right 인덱스에서 left 인덱스를 뺀 값이 연속적인 1의 최대 길이가 됩니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      k--;
    }
    if (k < 0) {
      if (nums[left] === 0) {
        k++;
      }
      left++;
    }
    right++;
  }

  return right - left;
};
