/*
### Approach
- brown + yellow / height === width
- (width - 2) * (height - 2) === yellow
- 두 조건에 만족하는 width, height를 구해서 배열 형태로 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

function solution(brown, yellow) {
  const answer = [];
  const sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    const width = sum / height;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }

  return answer;
}
