function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      // 가격이 떨어졌거나 배열의 끝에 도달한 경우
      if (prices[i] > prices[j] || j === prices.length - 1) {
        answer.push(j - i); // 떨어지지 않은 기간을 계산하여 추가
        break; // 내부 반복문 종료
      }
    }
  }
  return answer; // 계산된 기간을 담은 배열 반환
}
/*
  
# Intuition

이 문제의 핵심 아이디어는 주식가격이 감소하는 첫 번째 순간을 찾는 것.
가격이 감소하지 않고 유지되는 시간을 계산하기 위해, 현재 가격보다 낮은 가격이 나타나는 첫 시점을 찾는다.
만약 모든 후속 가격이 현재 가격보다 높거나 같으면, 가격이 떨어지지 않은 기간은 현재 시점부터 배열의 끝까지다.

# Approach

1. 반복 구조 사용: 이중 반복문을 사용하여 각 가격에 대해 그 가격이 떨어지지 않는 기간을 찾는다.
2. 내부 반복문: 현재 가격에서 시작하여 가격이 떨어지는 첫 번째 시점을 찾는다. 가격이 떨어지거나 배열의 끝에 도달하면, 그 시점까지의 기간을 계산한다.
3. 결과 기록: 각 가격에 대해 계산된 기간을 answer 배열에 추가한다.

# Complexity

- Time complexity: O(n^2)
  n은 prices 배열의 길이.
  각 가격에 대해, 나머지 가격들과 비교하여 가격이 떨어지지 않는 기간을 찾기 때문에 최악의 경우 모든 가격 쌍에 대해 비교 연산을 수행해야 한다.

- Space complexity: O(n)
  answer 배열을 저장하는 데 필요한 공간. 이 배열은 입력 배열 prices와 동일한 길이를 가짐.

  */
