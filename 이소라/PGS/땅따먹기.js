/*
### Approach
- land 배열을 순회하면서 현재 요소와 이전 요소의 최댓값을 더합니다.
- 계산 결과 값 중 최댓값을 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

function solution(land) {
  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0],
    ),
  );
}
