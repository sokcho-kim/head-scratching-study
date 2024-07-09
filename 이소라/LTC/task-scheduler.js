/*
- Approach
- tasks 배열 내 알파벳의 빈도수를 frequencies 배열에 저장합니다.
- frequencies 배열을 오름차순으로 정렬하고, 최대빈도수를 구합니다.
- tasks 배열 내 알파벳의 빈도수가 최대빈도수보다 적은 경우 idle slot이 필요합니다.
  - idle slot이 필요하지 않다면, tasks 배열의 길이를 반환합니다.
  - idle slot이 필요하다면, tasks 배열의 길이와 idle slot 갯수를 더한 값을 반환합니다.

- Complexity
Time complexity : O(N)
Space complexity : O(1)
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const frequencies = Array(26).fill(0);

  for (const letter of tasks) {
    frequencies[letter.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
  }

  frequencies.sort((a, b) => a - b);

  const maxFrequency = frequencies[25] - 1;

  let idleSlotCount = maxFrequency * n;

  for (let i = 0; i < 25; i++) {
    if (frequencies[i]) {
      idleSlotCount -= Math.min(maxFrequency, frequencies[i]);
    }
  }

  return idleSlotCount > 0 ? tasks.length + idleSlotCount : tasks.length;
};
