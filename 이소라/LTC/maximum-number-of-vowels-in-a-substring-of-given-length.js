/*
### Approach
- 문자열 s에서 0번째부터 k개의 부분 문자열 중 모음 문자열 갯수를 구합니다.
- 한 칸씩 이동하면서 모음 문자열 갯수를 갱신합니다.
  - 부분 문자열의 첫 글자가 모음인 경우 1을 빼고, 마지막 글자가 모음인 경우 1을 더합니다.
  - 모음 문자열 갯수의 최댓값을 갱신합니다.
- 최종 모음 문자열 갯수의 최댓값을 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = 'aeiou';
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }

  if (count === k) {
    return k;
  }

  maxCount = count;

  for (let i = 0; i <= s.length - k; i++) {
    if (vowels.includes(s[i])) {
      count--;
    }

    if (vowels.includes(s[i + k])) {
      count++;
    }

    if (count === k) {
      return k;
    }

    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
};
