/*
### Approach
- keyboard와 drive의 합이 b(budge)보다 큰 경우 건너뜁니다.
- 그렇지 않은 경우, keyboard와 drive의 합의 최댓값을 갱신합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(1)
*/

function getMoneySpent(keyboards, drives, b) {
  let maxPrice = 0;

  for (const keyboard of keyboards) {
    for (const drive of drives) {
      if (keyboard + drive > b) {
        continue;
      } else {
        maxPrice = Math.max(maxPrice, keyboard + drive);
      }
    }
  }

  return maxPrice || -1;
}
