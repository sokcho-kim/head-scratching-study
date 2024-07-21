/*
- Approach
- nums 배열을 순회하면서 요소들을 Set 자료구조에 저장합니다.
- Set에 저장된 요소를 다시 만났을 때, 그 요소를 반환합니다.

- Complexity
Time complexity : O(N)
Space complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
};
