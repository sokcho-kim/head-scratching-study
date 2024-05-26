/*
### Approach
- path 문자열을 '/'을 기준으로 나눠서 directories 배열로 만듭니다.
- directories 배열을 순회하면서 문자열들을 stack 배열에 넣습니다.
  - 문자열이 '.'이나 ''인 경우에는 건너뜁니다.
  - 문자열이 '..'인 경우에는 이전 문자열을 삭제합니다.
- stack 배열에 담긴 문자열을 '/'로 이어줍니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const directories = path.split('/');
  const stack = [];

  for (const directory of directories) {
    if (directory === '.' || directory.length === 0) {
      continue;
    } else if (directory === '..') {
      stack.pop();
    } else {
      stack.push(directory);
    }
  }

  return '/' + stack.join('/');
};
