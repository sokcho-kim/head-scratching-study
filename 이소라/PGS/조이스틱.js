/*
### Approach
- 조이스틱 상하 움직임 횟수는 A부터 시작했을 때와 Z부터 시작했을 때의 이동 횟수를 비교해서 더 작은 수로 정합니다.
- 조이스틱 좌우 움직임 횟수는 while 문을 사용하여 연속된 A의 갯수를 구하고 최소 이동 회수를 구합니다.
  - 순서대로 갔을 경우 (name.length)
  - 앞으로 간 후 다시 뒤로 돌아갔을 경우 (index * 2 + name.length - nextIndex)
  - 뒤로 먼저 간 후 앞으로 갔을 경우 (index + 2 * (name.length - nextIndex))
- 위 세 경우의 이동 횟수를 비교하여 가장 작은 수를 조이스틱 좌우 횟수에 더합니다.
- 조이스틱 상하 움직임 횟수와 좌우 움직임 횟수를 더한 값을 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(name) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const reverse = 'ZYXWVUTSRGPONMLKJIHGFEDCBA';
  const nameLength = name.length;
  const nameArray = name.split('');
  let topDownMove = 0;
  let leftRightMove = name.length - 1;

  nameArray.forEach((letter, index) => {
    const frontCount = alphabet.indexOf(letter);
    const backCount = reverse.indexOf(letter);
    topDownMove += Math.min(frontCount, backCount + 1);

    let nextIndex = index + 1;
    while (nextIndex < nameLength && nameArray[nextIndex] === 'A') {
      nextIndex++;
    }

    leftRightMove = Math.min(
      leftRightMove,
      index * 2 + nameLength - nextIndex,
      index + 2 * (nameLength - nextIndex),
    );
  });

  return topDownMove + leftRightMove;
}
