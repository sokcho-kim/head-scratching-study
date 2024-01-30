/*
### Approach
- 우선순위 priority와 들어온 순서인 index 값을 가진 객체들의 배열 queue를 만듭니다.
- queue의 첫 번째 프로세스를 꺼내고, some 메서드를 사용하여 나머지 요소들과 우선순위를 비교합니다.
- 현재 프로세스의 우선순위가 나머지 프로세스들보다 높다면 프로세스를 실행시키고 runningOrder의 값을 1 올려줍니다.
  - 실행시킬 때 해당 프로세스의 index가 location과 같다면 loop를 종료시키고 runningOrder 값을 반환합니다.
- 현재 프로세스의 우선순위가 나머지 프로세스들보다 낮다면, 다시 queue에 넣어줍니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(priorities, location) {
  let processOrder = 0;
  const queue = priorities.map((priority, index) => {
    return { priority, index };
  });

  while (queue.length) {
    const currentProcess = queue.shift();

    if (queue.some(process => process.priority > currentProcess.priority)) {
      queue.push(currentProcess);
    } else {
      processOrder++;
      if (currentProcess.index === location) {
        break;
      }
    }
  }

  return processOrder;
}
