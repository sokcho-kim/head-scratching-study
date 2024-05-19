/*
### Approach
- 배열의 각 요소의 값을 해당 인덱스 + k 위치의 요소에 할당합니다.
- 배열의 끝 요소를 차례로 앞에 할당합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }
};
