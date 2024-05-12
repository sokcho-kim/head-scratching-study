/*
### Approach
- 지금까지의 합에서 현재 인덱스의 값을 더한 경우와 뺀 경우에 대해서 함수를 재귀적으로 호출한다.
- 합이 target과 같을 때, answer 값을 올린다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

function solution(numbers, target) {
  let answer = 0;

  const dfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };

  dfs(0, 0);

  return answer;
}
