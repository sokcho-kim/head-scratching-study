/*
### Approach
- matrix 배열와 동일한 배열 dp을 만들고 Infinity 값으로 초기화합니다.
- 특정 row, col의 dp 요소는 동일한 위치의 matrix 요소에 아래, 대각선 왼/오른쪽 dp 요소를 더한 값입니다.
- matrix 배열의 첫 번째 행에 대한 dp 요소를 비교하여 최소합을 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N^2)
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const M = matrix.length;
  const N = matrix[0].length;
  const dp = Array.from({ length: M }, () => new Array(N).fill(Infinity));
  let minSum = Infinity;

  const calculateMinSum = (row, col) => {
    if (row === N) {
      return 0;
    }

    if (col < 0 || col >= N) {
      return Infinity;
    }

    if (dp[row][col] !== Infinity) {
      return dp[row][col];
    }

    const diagLeft = calculateMinSum(row + 1, col - 1);
    const below = calculateMinSum(row + 1, col);
    const diagRight = calculateMinSum(row + 1, col + 1);

    dp[row][col] = matrix[row][col] + Math.min(diagLeft, below, diagRight);

    return dp[row][col];
  };

  for (let i = 0; i < N; i++) {
    minSum = Math.min(minSum, calculateMinSum(0, i));
  }

  return minSum;
};
