/*
### Approach
- price 배열을 오름차순으로 정렬합니다.
- left를 0, right를 |최댓값 - 최솟값|로 정합니다.
- price 배열의 k개의 요소로 middle 값을 만들 수 있는지 여부를 판단합니다.
- binary search 알고리즘을 사용해서 유효한 middle 값 중 최댓값을 찾습니다.

### Complexity
- Time complexity : O(NlogN)
- Space complexity : O(1)
*/

/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  const N = price.length;

  const isValidTastiness = tastiness => {
    let firstPrice = price[0];
    let count = 1;
    for (let i = 1; i < N; i++) {
      if (price[i] - firstPrice >= tastiness) {
        count++;
        firstPrice = price[i];
      }
      if (count === k) {
        return true;
      }
    }
    return false;
  };

  price.sort((a, b) => a - b);

  let left = 0;
  let right = price[N - 1] - price[0] + 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (isValidTastiness(middle)) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left - 1;
};
