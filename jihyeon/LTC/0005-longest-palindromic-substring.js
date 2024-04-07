/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let left = "",
    right = "";
  const check = (i, j) => {
    left = i;
    right = j;

    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };
  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start <= s.length - length; start++) {
      if (check(start, start + length - 1)) {
        return s.substring(start, start + length);
      }
    }
  }
  return s[0];
};

/**
# Intuition

주어진 문자열에서 가장 긴 팰린드롬 부분 문자열을 찾는다.

# Approach

문자열 `s`에서 가능한 모든 부분 문자열을 순회하며 팰린드롬인지 확인한다.

1. **팰린드롬 검사 함수 `check` 정의**: 주어진 시작 인덱스 `i`와 종료 인덱스 `j` 사이의 부분 문자열이 팰린드롬인지 검사한다. `left`와 `right` 포인터를 사용하여 문자열의 양쪽 끝에서 중앙으로 이동하며 각 문자를 비교한다.
2. **모든 가능한 부분 문자열 탐색**: 문자열의 길이부터 시작하여 1까지 감소시키며 모든 가능한 부분 문자열을 탐색한다. 각 부분 문자열에 대해 `check` 함수를 호출하여 팰린드롬인지 검사한다.
3. **가장 긴 팰린드롬 반환**: 팰린드롬을 찾으면 해당 부분 문자열을 반환한다. 만약 모든 검사를 마치고 팰린드롬을 찾지 못했다면, 문자열의 첫 글자를 반환한다.

# Complexity

- Time complexity: \(O(n^3)\)
- Space complexity: \(O(1)\)

 */
