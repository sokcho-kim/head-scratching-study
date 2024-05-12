/*
### Approach
- (n + 1)X(m + 1) 배열 dp를 만듭니다.
- puddles 배열을 순회하면서 해당 dp 요소 값을 -1로 설정합니다.
- dp 배열을 순회하면서, 값이 -1인 경우 0을 할당하고 넘어가고 아닌 경우 요소의 값을 구합니다.
  - i행 j열 요소 값은 i-1행 j열(아래쪽), i행 j-1열(오른쪽) 요소 값의 합을 1000000007로 나눈 값입니다.
- n행 m열 dp 요소 값을 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(m, n, puddles) {
  const MOD = 1000000007;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  puddles.forEach(([x, y]) => {
    dp[y][x] = -1;
  });

  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) {
        continue;
      }

      if (dp[i][j] === -1) {
        dp[i][j] = 0;
        continue;
      }

      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
    }
  }

  return dp[n][m];
}
