/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let right = 0,
    left = 0;
  let current = 0;
  let max = 0;

  while (right < s.length) {
    if (vowels.has(s[right])) {
      current++;
    }
    if (right - left + 1 > k) {
      if (vowels.has(s[left])) {
        current--;
      }
      left++;
    }
    max = Math.max(max, current);
    right++;
  }
  return max;
};

/**
# Intuition

문자열에서 특정 길이의 부분 문자열 중 모음의 수가 최대인 것을 찾는다.
슬라이딩 윈도우 기법을 사용하여 모음의 수를 계산한다.

# Approach

1. 모음 집합을 배열로 생성한다.
2. 슬라이딩 윈도우를 이용하여 문자열을 순회한다.
3. 윈도우 안에 들어온 새 문자가 모음이면 카운트를 증가시킨다.
4. 윈도우의 크기가 `k`를 초과하면, 윈도우의 왼쪽에서 문자를 제거하고 필요하면 카운트를 감소시켜 끝까지 슬라이딩시킨다.
5. 각 단계에서 모음의 최대 수를 기록한다.

# Complexity

- Time complexity: \(O(n)\) - 문자열을 한 번만 순회한다.
- Space complexity: \(O(1)\) - 고정된 크기의 모음 집합을 사용한다.

 */
