/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b);
  let start = 0;
  let end = price[price.length - 1] - price[0];
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (check(price, k, mid)) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

/**
Intuition

서로 다른 k개의 사탕을 선택하여 그 사이의 최소 가격차이를 최대화 하는것

Approach

1. 사탕 가격 배열 정렬 : 사탕 가격 배열을 오름차순으로 정렬.
2. 이진 탐색 : 가격 차이 값을 가능한 최소 값(0)과 최대 값(가장 비싼 사탕과 가장 싼 사탕의 가격 차이: `price[price.length - 1] - price[0]`)를 계산
3. 그리디 알고리즘(check 함수) :주어진 가격 차이값(mid)으로 k개의 사탕을 선택할 수 있는 지 확인. 선택 가능한 사탕의 수가 k개 이상이면, 가격 차이 값이 유효하기 때문에 더 큰 값을 시도해볼 수 있다.(이진트리 로직에서 큰 값으로 mid를 할당) 만약, 그렇지않다면 더 작은 값으로 시도해야함

Complexity

- Time complexity:
  - 이진탐색 : O(logn)
  - check 그리디 : O(n)
    즉, O(nlogn)
- Space complexity: O(1)


*/
