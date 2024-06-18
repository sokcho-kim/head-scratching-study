/*
### Approach
- backtracing 알고리즘을 통해 1부터 X의 제곱근까지의 N승의 합의 경우의 수를 구합니다.
- N승의 합이 X 이상일 경우 건너뛰고, X와 같을 때 카운트에 1을 더합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(1)
*/

function powerSum(X, N) {
  let sumCount = 0;

  const backtracking = (sum, start) => {
    for (let i = start; i <= Math.sqrt(X); i++) {
      sum += i ** N;

      if (sum >= X) {
        if (sum === X) {
          sumCount++;
        }
        break;
      }

      backtracking(sum, i + 1);

      sum -= i ** N;
    }
  };

  backtracking(0, 1);

  return sumCount;
}
