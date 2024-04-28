/*
- Approach
- bracket pair를 객체에 담아줍니다.
- 문자열을 순회하면서 해당 bracket과 스택의 마지막 bracket이 pair일 경우, 마지막 bracket을 제거합니다.
- 순회 후 스택의 길이가 0이면 true, 아니면 false를 반환합니다.

- Complexity
Time complexity : O(N)
Space complexity : O(1)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pairObj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    const prevBracket = stack[stack.length - 1];

    if (s[i] === pairObj[prevBracket]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
