/*
### Approach
- BFS 알고리즘을 사용하여 직사각형의 여집합의 테두리를 탐색합니다.
- 직사각형이 근접해있을 때도 테두리를 정확히 따라가기 위해서 직사각형 꼭지점 좌표값을 2배 늘려줍니다.
- 2배 늘린 직사각형 좌표 배열을 순회하면서 테두리 좌표에는 1, 테두리 내부 좌표에는 2를 할당합니다.
- 시작점부터 상하좌우 방향으로 탐색하면서 테두리일 때의 좌푯값과 경로를 queue에 넣습니다.
- 방문한 좌표에는 101을 할당하여 다시 방문하지 않도록 합니다.
- 아이템 좌표에 도달했을 때의 경로의 절반을 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(rectangle, characterX, characterY, itemX, itemY) {
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  const doubleRectangle = rectangle.map(rect => rect.map(point => point * 2));
  const coordinates = Array.from({ length: 103 }, () => new Array(103).fill(0));

  doubleRectangle.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (coordinates[i][j] === 0) coordinates[i][j] = 1;
        } else {
          coordinates[i][j] = 2;
        }
      }
    }
  });

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [[characterX, characterY, 0]];
  coordinates[characterX][characterY] = 101;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === itemX && y === itemY) {
      return count / 2;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < 101 && ny >= 0 && ny < 101)
        if (coordinates[nx][ny] === 1) {
          coordinates[nx][ny] = 101;
          queue.push([nx, ny, count + 1]);
        }
    }
  }

  return 0;
}
