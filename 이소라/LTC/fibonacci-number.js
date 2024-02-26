/*
### Approach
- N이 0이거나 2보다 작은 경우, 0 또는 1을 반환합니다.
- 피보나치 수열 점화식을 사용하여 F(N)을 구해서 반환합니다.

### Complexity
- Time complexity : O(2^N)
- Space complexity : O(N)
*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
