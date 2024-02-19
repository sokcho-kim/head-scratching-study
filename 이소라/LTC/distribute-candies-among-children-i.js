/*
### Approach
- i + j + k = n이 되는 경우의 수를 구합니다.
- k = n - i - j로 설정하여 시간복잡도 O(N^3)을 O(N^2)로 줄입니다.
- k가 limit 이하 정수인 경우의 수를 구해서 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let ways = 0;

  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      const k = n - i - j;
      if (k >= 0 && k <= limit) {
        ways++;
      }
    }
  }

  return ways;
};
