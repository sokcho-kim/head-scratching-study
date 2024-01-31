/*
### Approach
- 해당 주식 가격 다음 인덱스부터 끝까지 탐색하면서 시간을 잽니다.
- 해당 주식 가격보다 더 낮은 주식 가격이 나왔을 때 탐색을 종료합니다.
- 잰 시간을 answer 배열에 차례대로 담아서 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(prices) {
  const answer = [];

  prices.forEach((sharePrice, index) => {
    let time = 0;

    for (let i = index + 1; i < prices.length; i++) {
      time++;
      if (prices[i] < sharePrice) {
        break;
      }
    }

    answer.push(time);
  });

  return answer;
}
