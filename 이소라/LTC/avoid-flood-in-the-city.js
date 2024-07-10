/*
- Approach
- rains 배열을 순회하면서 i번째 날이 가뭄인 경우, dryDays 배열에 i를 저장합니다.
- i번째 날이 가뭄이 아니면서 lakeMap에 저장되어 있지 않은 경우, 강수량 lake와 날짜 i를 lakeMap에 저장합니다.
- i번째 날이 가뭄이 아니면서 lakeMap에 저장되어 있는 경우, Binary Search 알고리즘을 사용하여 가문날을 찾습니다.
  - 가뭄날이 없을 경우, 홍수가 나므로 빈 배열을 반환합니다.
  - 가뭄날이 있을 경우, 가뭄날에 강수량 lake를 저장하고 dayDays 배열에서 해당 가뭄날을 제거하고 lakeMap을 갱신합니다.
- rains 배열을 모두 순회한 후에도 dryDays 배열에 남아 있는 가뭄날에는 1을 저장합니다.

- Complexity
Time complexity : O(NlogN)
Space complexity : O(N)
*/

/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const dryDays = [];
  const result = new Array(rains.length).fill(-1);
  const lakeMap = new Map();

  const binarySearch = day => {
    let left = 0;
    let right = dryDays.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (dryDays[mid] > day) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };

  for (let i = 0; i < rains.length; i++) {
    const lake = rains[i];

    if (lake === 0) {
      dryDays.push(i);
    } else {
      if (lakeMap.has(lake)) {
        const day = lakeMap.get(lake);
        const dryIndex = binarySearch(day);

        if (dryIndex === dryDays.length) {
          return [];
        }

        result[dryDays[dryIndex]] = lake;
        dryDays.splice(dryIndex, 1);
        lakeMap.set(lake, i);
      } else {
        lakeMap.set(lake, i);
      }
    }
  }

  for (const day of dryDays) {
    result[day] = 1;
  }

  return result;
};
