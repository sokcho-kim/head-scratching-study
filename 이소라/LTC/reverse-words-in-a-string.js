/*
### Approach
- space를 기준으로 문자열을 나누고, space 길이가 0 이상인 부분을 걸러주고, 반대로 정렬해서 space 간격을 두고 이어줍니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .filter(letter => letter.length > 0)
    .reverse()
    .join(' ');
};
