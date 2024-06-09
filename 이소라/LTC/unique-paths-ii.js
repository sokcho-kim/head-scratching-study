/*
### Approach
- 경로 합을 저장할 dp 배열을 만듭니다.
- 시작점이나 장애물이 있을 경우 건너뛰는 조건문을 추가합니다.
- 'dp[i][j] = dp[i][j -1] + dp[i - 1][j]' 점화식을 사용합니다.

### Complexity
- Time complexity : O(M * N)
- Space complexity : O(M * N)
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0]) {
    return 0;
  }

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));

  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((!i && !j) || obstacleGrid[i][j]) {
        continue;
      }
      dp[i][j] = (i ? dp[i - 1][j] : 0) + (j ? dp[i][j - 1] : 0);
    }
  }

  return dp[m - 1][n - 1];
};
