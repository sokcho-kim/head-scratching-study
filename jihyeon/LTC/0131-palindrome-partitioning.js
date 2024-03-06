/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];

  function isPalindrome(start, end) {
    while (start < end) {
      if (s[start] !== s[end]) return false;
      start++;
      end--;
    }
    return true;
  }

  function backtrack(start) {
    if (start === s.length) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(start, i)) {
        path.push(s.substring(start, i + 1));
        backtrack(i + 1);
        path.pop();
      }
    }
  }
  backtrack(0);
  return result;
};
/**
# Intuition

문자열 `s`를 palindrome(palindrome) 서브스트링으로 분할하는 모든 가능한 방법을 찾는 것.

## Approach

문자열 `s`의 각 위치에서 시작하여, 가능한 모든 서브스트링이 palindrome일인지 확인하고, palindrome일 경우 현재 path에 추가한 후 다음 위치로 넘어가는 방식으로 접근. 문자열의 끝에 도달하면 현재 path를 결과에 추가한다.
백트래킹 알고리즘 사용

## Complexity

1. **palindrome 확인:** 시작 인덱스와 끝 인덱스를 입력으로 받아 해당 서브스트링이 palindrome인지 확인
2. **백트래킹:** 현재 인덱스에서 시작하여 문자열의 끝까지 각 서브스트링이 palindrome인지 확인하고, palindrome일 경우 path에 추가한 후, 다음 인덱스로 넘어가는 재귀 함수
3. **종료 조건:** 문자열의 끝에 도달했을 때 현재까지의 path값을 추가

## 복잡도

- Time complexity: $$O(n \cdot 2^n)$$, 최악의 경우 문자열의 각 위치에서 palindrome 서브스트링을 찾기 위해 모든 가능한 서브스트링을 검사
- Space complexity: $$O(n)$$, 백트래킹을 위한 재귀 호출 스택과 현재 path를 저장하는 데 사용되는 공간. 최악의 경우 모든 문자 저장
 
 */
