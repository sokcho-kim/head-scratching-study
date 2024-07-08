/*
- Approach
- Map 자료구조에 숫자와 빈도수를 저장합니다.
- 빈도수순으로 숫자를 정렬하고, k 갯수 만큼의 숫자를 배열에 담아 반환합니다.

- Complexity
Time complexity : O(NlogN)
Space complexity : O(N)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const result = [];

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortedArr[i][0]);
  }

  return result;
};
