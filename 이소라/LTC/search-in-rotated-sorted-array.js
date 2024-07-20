/*
- Approach
- Binary Search 알고리즘을 사용하여 target의 인덱스를 구합니다.
- mid 인덱스 값이 left 인덱스 값보다 크거나 같으면 left부터 mid 사이가 오름차순으로 정렬되어 있다는 것을 알 수 있습니다.
  - 이 때 target이 left 인덱스 값보다 크고 mid 인덱스 값보다 작다면, left 인덱스 값을 mid + 1로 늘려줍니다.
  - 그렇지 않다면, right 인덱스 값을 mid - 1로 줄여줍니다.
- mid 인덱스 값이 right 인덱스 값보다 작거나 같으면 mid부터 right 사이가 오름차순으로 정렬되어 있다는 것을 알 수 있습니다.
  - 이 때 target이 mid 인덱스 값보다 크고 right 인덱스 값보다 작다면, left 인덱스 값을 mid + 1로 늘려줍니다.
  - 그렇지 않다면, right 인덱스 값을 mid - 1로 줄여줍니다.

- Complexity
Time complexity : O(logN)
Space complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] <= nums[right]) {
      if (nums[right] >= target && nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else break;
  }

  return -1;
};
