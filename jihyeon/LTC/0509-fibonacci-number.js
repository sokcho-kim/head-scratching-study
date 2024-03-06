/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const memo = {};

  function helper(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) return memo[n];

    const result = helper(n - 1) + helper(n - 2);
    memo[n] = result;
    return result;
  }
  return helper(n);
};

/*
## Intuition

피보나치 수열을 계산하는 문제 (피보나치 수열은 각 숫자가 바로 앞의 두 숫자의 합으로 이루어진 수열)

## Approach

1. 피보나치 수를 계산하기 위해 재귀 함수를 사용
2. 이미 계산된 피보나치 수를 저장하기 위한 메모이제이션 기법을 사용
3. `n`이 0이거나 1일 때는 각각 0과 1을 반환
4. 그렇지 않은 경우, `n-1`과 `n-2`에 대한 피보나치 수를 재귀적으로 계산하고, 이를 더하여 반환
5. 계산된 값을 메모이제이션하여, 다음 호출 시 재계산을 방지

## Complexity

- **시간 복잡도:** $$O(n)$$, 메모이제이션을 사용하므로 각 숫자에 대해 피보나치 수를 한 번씩만 계산
- **공간 복잡도:** $$O(n)$$, 메모이제이션을 위해 최대 `n`개의 피보나치 수를 저장

*/
