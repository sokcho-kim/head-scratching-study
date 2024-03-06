/*
### Approach
- 누적합 부분배열 요소들을 arr 배열에 넣습니다.
- arr 배열을 오름차순으로 정렬합니다.
- left부터 right까지의 배열을 자르고, 총합을 구합니다.
- 총합을 10^9 + 7로 나눈 나머지를 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N^2)
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const arr = [];

  const subArraySum = startIndex => {
    let sum = 0;
    for (let i = startIndex; i < n; i++) {
      sum += nums[i];
      arr.push(sum);
    }
  };

  for (let i = 0; i < n; i++) {
    subArraySum(i);
  }

  arr.sort((a, b) => a - b);
  let res = arr.slice(left - 1, right).reduce((acc, cur) => acc + cur, 0);
  return res % (Math.pow(10, 9) + 7);
};
