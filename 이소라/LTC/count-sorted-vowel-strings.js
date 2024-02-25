/*
### Approach
- backtracking 알고리즘을 사용하여 모든 경우의 문자열을 구합니다.
- 문자열이 담긴 배열의 길이를 반환합니다.

### Complexity
- Time complexity : O(5^N)
- Space complexity : O(N)
*/

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const answer = [];

  const getCombination = (startIndex, rest) => {
    if (rest.length === n) {
      answer.push(rest.join(''));
      return;
    }

    for (let i = startIndex; i < vowels.length; i++) {
      rest.push(vowels[i]);
      getCombination(i, rest);
      rest.pop();
    }
  };

  getCombination(0, []);
  return answer.length;
};
