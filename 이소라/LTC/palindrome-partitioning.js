/*
### Approach
- 주어진 문자열을 뒤집어도 같은지 확인하여 palindrome인지 판별합니다.
- 문자열의 시작 인덱스부터 끝까지 반복하면서 부분문자열을 구합니다.
- 부분문자열이 palindrome인 경우에만 parts 배열에 넣습니다.
- 문자열의 시작 인덱스가 문자열의 총 길이이면 모든 문자를 확인한 것이므로, parts 배열을 answer 배열에 넣습니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const totalLength = s.length;
  const answer = [];

  const isPalindrome = str => {
    return str === str.split('').reverse().join('');
  };

  const dfs = (startIndex, parts) => {
    if (startIndex === totalLength) {
      answer.push([...parts]);
      return;
    }

    for (let endIndex = startIndex + 1; endIndex <= totalLength; endIndex++) {
      const part = s.substring(startIndex, endIndex);

      if (isPalindrome(part)) {
        parts.push(part);
        dfs(endIndex, parts);
        parts.pop();
      }
    }
  };

  dfs(0, []);

  return answer;
};
