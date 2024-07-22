/*
- Approach
- phone 숫자에 연관된 문자열을 phoneObj 객체에 저장합니다.
- digits 문자열을 순회하면서 해당 숫자에 연관된 문자열 중 한 문자를 선택해서 조합합니다.
- 조합한 문자열이 담긴 배열을 반환합니다.

- Complexity
Time complexity : O(4^N * N)
Space complexity : O(4^N * N)
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phoneObj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const answer = [];
  const length = digits.length;

  if (digits === null || !length) {
    return [];
  }

  const dfs = (index, combination) => {
    if (index === length) {
      answer.push(combination);
      return;
    }

    for (const letter of phoneObj[digits[index]]) {
      dfs(index + 1, combination + letter);
    }
  };

  dfs(0, '');

  return answer;
};
