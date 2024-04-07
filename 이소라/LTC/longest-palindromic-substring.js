/*
### Approach
- two pointer를 사용하여 가운데를 중심으로 양끝이 같을 경우, 양끝을 늘려가면서 최대 길이의 palindrome을 구합니다.
- 해당 인덱스를 기준으로 완전 대칭인 palindrome과 한 문자열을 중심으로 대칭인 palindrome을 각각 구합니다.
- 문자열의 처음부터 끝까지 for 루프를 돌면서 가장 긴 palindrome을 갱신한 후 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = '';

  const getLongestPalindrome = (start, end) => {
    while (start >= 0 && end <= s.length && s[start] === s[end]) {
      start--;
      end++;
    }

    return s.slice(start + 1, end);
  };

  for (let i = 0; i < s.length; i++) {
    const str1 = getLongestPalindrome(i, i);
    const str2 = getLongestPalindrome(i, i + 1);
    const longerPalindrome = str1.length > str2.length ? str1 : str2;

    if (longerPalindrome.length > result.length) {
      result = longerPalindrome;
    }
  }

  return result;
};
