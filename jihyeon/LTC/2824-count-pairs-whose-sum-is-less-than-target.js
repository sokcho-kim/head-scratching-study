/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[start] + nums[end] < target) {
      count += end - start;
      start++;
    } else {
      end--;
    }
  }
  return count;
};
/**
Intuition

정렬한 배열을 투 포인트 기법을 사용해서 타겟보다 더 작은 합을 가지는 쌍을 구한다.

Approach

1. 배열 정렬
2. 투 포인트 초기화 (start, end) : 배열의 제일 왼쪽 포인터(start)와 배열의 끝에서 시작하는 오른쪽 포인터(end) 초기화
3. 두 요소의 합이 타겟보다 더 작은 경우의 쌍 갯수를 셈** : start와 end의 합이 타겟보다 작을 경우, end가 start보다 왼쪽으로 이동시키면서 start와 함께 타겟보다 작은 합을 모두 구할 수 있다. (`count += end - start`)
4. 모든 요소에 대해서 반복 : 모든 요소 기반으로 두 요소의 합이 타겟보다 작으면 왼쪽 포인트인 start 올리고, 크면 오른쪽 포인트인 end를 낮춘다.


Complexity

- Time complexity: 정렬로 인한 O(nlogn) - n : 배열의 요소수
- Space complexity: 정렬이 제자리에서 이루어지지않을 경우 O(n), 그게 아니면 O(1)

 */
