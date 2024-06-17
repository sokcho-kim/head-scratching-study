/*
### Approach
- 숫자가 큰 정수이므로 BigInt로 감싸줍니다.
- 1부터 n까지의 곱을 계산하여 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

function extraLongFactorials(n) {
  let result = BigInt(1);

  for (let i = 1; i <= n; i++) {
    result *= BigInt(i);
  }

  console.log(result.toString());

  return result;
}
