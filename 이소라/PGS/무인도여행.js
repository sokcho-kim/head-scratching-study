/*
### Approach
- maps 배열 내 문자열을 한 글자씩 쪼갠 배열을 만듭니다.
- maps 배열을 순회하면서 상하좌우로 연결된 땅의 식량들을 더합니다.
- 각 섬의 식량들을 담은 배열을 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(maps) {
  const answer = [];
  const n = maps.length;
  const m = maps[0].length;
  const mapArr = maps.map(str => str.split(''));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const dfs = (x, y, totalFood) => {
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (mapArr[nx][ny] !== 'X') {
          const food = Number(mapArr[nx][ny]);
          mapArr[nx][ny] = 'X';
          totalFood += dfs(nx, ny, food);
        }
      }
    }

    return totalFood;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mapArr[i][j] !== 'X') {
        const food = Number(mapArr[i][j]);
        mapArr[i][j] = 'X';
        const totalFood = dfs(i, j, food);
        answer.push(totalFood);
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
