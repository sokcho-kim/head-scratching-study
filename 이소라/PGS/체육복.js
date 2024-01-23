/*
### Approach
- n 길이의 배열 clothes을 만들고 1을 포함하도록 합니다.
- lost에 포함된 인덱스에 해당하는 clothes 값을 0으로 재할당합니다.
- reserve에 포함된 인덱스에 해당하는 clothes 값에는 1을 더합니다.
- for 문을 돌면서 해당 인덱스의 앞, 뒤 인덱스 값이 2인 경우 체육복을 재분배합니다.
- for 문 이후 clothes 값이 0 이상인 경우만 필터링하여 그 길이를 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

function solution(n, lost, reserve) {
  let clothes = new Array(n).fill(1);

  lost.map(lostNumber => (clothes[lostNumber - 1] = 0));

  reserve.map(reserveNumber => (clothes[reserveNumber - 1] += 1));

  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    } else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }

  return clothes.filter(clothCount => clothCount > 0).length;
}
