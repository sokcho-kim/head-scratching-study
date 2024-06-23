/*
### Approach
- BFS 알고리즘을 사용하여 갈 수 있는 경로를 탐색합니다.
- 이동할 경로가 있을 경우, count에 1을 더해줍니다.
- 도착지에 도착했을 때의 count와 k를 비교합니다.
  - 두 수가 같다면 'Impressed'를 반환하고, 그렇지 않다면 'Oops!'를 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function countLuck(matrix, k) {
  const N = matrix.length;
  const M = matrix[0].length;
  const visited = Array.from(new Array(N), () => new Array(M).fill(false));

  const bfs = (startX, startY) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const queue = [];

    queue.push([startX, startY, 0]);

    while (queue.length) {
      const [x, y, count] = queue.shift();

      if (matrix[x][y] === '*') {
        return count;
      }

      if (visited[x][y]) {
        continue;
      }

      visited[x][y] = true;

      let track = [];

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && matrix[nx][ny] !== 'X') {
          track.push([nx, ny]);
        }
      }

      const wayCount = track.length > 1 ? count + 1 : count;

      for (let i = 0; i < track.length; i++) {
        const [nx, ny] = track[i];
        queue.push([nx, ny, wayCount]);
      }
    }

    return 0;
  };

  let startX, startY;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 'X') {
        visited[i][j] = true;
      }

      if (matrix[i][j] === 'M') {
        startX = i;
        startY = j;
      }
    }
  }

  const count = bfs(startX, startY);

  return count === k ? 'Impressed' : 'Oops!';
}
