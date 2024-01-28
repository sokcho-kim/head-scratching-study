/*
### Approach
- number의 각 자리수를 stack에 push합니다.
- number의 각 자리수가 stack의 가장 마지막 요소보다 클 경우, 가장 마지막 요소를 pop하고 k 값을 1 감소시킵니다.
- 모든 자리수를 비교한 후에도 k가 0보다 큰 경우를 대비하여 남은 k만큼 뒤에서 제거합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const digit = Number(number[i]);
    while (k > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
}
