/*
### Approach
- nums 배열을 오름차순으로 정렬합니다.
- nums 배열의 양 끝을 left, right로 정합니다.
- "nums[left] + nums[right] < target"의 조건에 만족하는 경우의 수를 구해서 반환합니다.

### Complexity
- Time complexity : O(NlogN)
- Space complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};
