/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = nums.slice(i, j + 1).reduce((acc, cur) => acc + cur, 0);
      stack.push(sum);
    }
  }
  stack.sort((a, b) => a - b);
  return stack.slice(left - 1, right).reduce((a, c) => a + c, 0) % (Math.pow(10, 9) + 7);
};

/**
Intuition

모든 연속된 부분 배열의 합을 계산하고, 그 합을 저장하는 배열을 생성한뒤, 생성된 배열을 정렬하고, left에서 right까지의 요소들의 합을 계산한다.

Approach

1. 부분 배열의 합 계산**: 해당 시작점에서 끝나는 모든 부분 배열을 순회한다. `nums.slice(i, j + 1).reduce((acc, cur) => acc + cur, 0)`를 사용하여 각 부분 배열의 합을 계산하고, 이 합을 stack 배열에 저장한다.
2. 정렬: 계산된 모든 부분 배열의 합을 포함하는 stack 배열을 stack.sort((a, b) => a - b)를 사용하여 비감소 순서로 정렬.
3. 합의 계산: left에서 right까지의 요소들을 `stack.slice(left - 1, right).reduce((a, c) => a + c, 0)`를 사용하여 합산하고, `10^9 + 7`로 나눈 나머지를 반환한다.

Complexity

- Time complexity: O(n^2 log n)
  - 부분 배열의 합 계산 : O(n^2)
  - 정렬 : O(n^2 log n^2)
- Space complexity: 부분 배열의 합을 저장하기 위한 추가 공간 stack이 필요하므로, 공간 복잡도는 O(n^2)

 */
