/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let zeroCount = 0;
  let maxCount = 0;
  let right = 0;
  left = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    maxCount = Math.max(maxCount, right - left + 1);
    right++;
  }
  return maxCount;
};
/**
# Intuition

주어진 배열에서 `k`개의 0을 1로 뒤집어 가장 긴 연속된 1의 배열을 찾는 문제로 슬라이딩 윈도우 기법을 사용한다.
윈도우 내의 0의 개수가 `k`를 초과하지 않는 최대 길이를 찾는다.

# Approach

1. 두 포인터 (`left`와 `right`)를 사용하여 배열을 순회한다.
2. `right` 포인터가 가리키는 값이 0일 경우, `zeroCount`를 증가시킨다.
3. 만약 `zeroCount`가 `k`를 초과하면, `left` 포인터를 이동시켜 윈도우의 크기를 조정한다. (`zeroCount`가 `k` 이하가 될 때까지 진행)
4. 각 단계에서 윈도우의 크기 (`right - left + 1`)가 현재까지의 최대 크기보다 큰지 확인하고, 더 크다면 `maxCount`을 갱신한다.
5. 모든 요소를 확인한 후, 계산된 최대크기 `maxCount`를 반환한다.

# Complexity

- Time complexity: \(O(n)\) - 배열을 한 번만 순회한다.
- Space complexity: \(O(1)\) - 변수 몇 개만 사용하므로 상수 공간을 사용한다.

 */
