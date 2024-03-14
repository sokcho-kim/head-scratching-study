/*
### Approach
- 던전 방문 여부를 나타내는 visited 배열을 만듭니다.
- 방문하지 않았으면서 최소 필요 피로도가 현재 피로도가 작은 던전만 방문하고 visited를 true로 변경합니다.
- 현재 피로도에서 소모 피로도를 뺀 값과 탐험한 던전 갯수에서 1을 더한 값을 인수로 dfs 함수를 재귀적으로 호출합니다.
- 다른 경우도 고려하기 위해 방문한 던전의 visited를 false로 초기화합니다.
- 탐험한 던전 갯수의 최댓값을 구해서 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(k, dungeons) {
  let answer = 0;
  const totalDungeons = dungeons.length;
  const visited = new Array(totalDungeons).fill(false);

  const dfs = (curFatigue, dungeonCount) => {
    answer = Math.max(answer, dungeonCount);

    for (let i = 0; i < totalDungeons; i++) {
      const [minFatigue, usedFatigue] = dungeons[i];

      if (curFatigue >= minFatigue && !visited[i]) {
        visited[i] = true;
        dfs(curFatigue - usedFatigue, dungeonCount + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);
  return answer;
}
