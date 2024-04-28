/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  for (let i = 0; i < nums.length - k; i++) {
    sum = sum - nums[i] + nums[i + k];
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum / k;
};

/**
# Intuition

연속된 `k` 개의 요소를 가진 부분 배열의 최대 평균을 찾는다.
이를 위해 슬라이딩 윈도우 기법을 사용한다.

# Approach

1. 초기 `k`개 요소의 합을 계산하여 초기 값을 설정한다.
2. 첫 번째 요소를 빼고 다음 요소를 더함으로써 합을 갱신한다.
3. 끝까지 이동시키면서 합 중 최대값을 기록한다.
4. 최대 합을 `k`로 나눈 값을 반환한다.

# Complexity

- Time complexity: \(O(n)\) - `n`은 배열의 길이. 배열을 한 번만 순회한다.
- Space complexity: \(O(1)\) - 입력 배열을 그대로 사용하여 연산을 수행한다.

 */
