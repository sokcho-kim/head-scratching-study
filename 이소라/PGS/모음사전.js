/*
### Approach
- 가능한 문자열들을 모아 한 문자열로 선언합니다.
- 각 자릿수의 경우의 수를 배열에 저장합니다.
- word의 각 문자열의 인덱스와 경우의 수를 곱하고 1을 더해줍니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

function solution(word) {
  const alphabet = 'AEIOU';
  const counts = [781, 156, 31, 6, 1];
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    answer += alphabet.indexOf(word[i]) * counts[i] + 1;
  }

  return answer;
}
