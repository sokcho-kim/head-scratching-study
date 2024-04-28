/*
### Approach
- 이전 주식 가겨과 현재 주식 가격을 비교하여 현재 주식 가격이 더 높을 때만 거래합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let prev = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];

    if (prev < curr) {
      profit += curr - prev;
    }

    prev = curr;
  }

  return profit;
};
