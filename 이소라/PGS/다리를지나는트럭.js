/*
### Approach
- 다리를 지나는 트럭들의 무게 합을 bridge_weight 변수에 저장합니다.
- 다리를 지나는 트럭의 무게와 그 트럭이 지나가는데 걸리는 시간을 담긴 배열을 bridge 배열에 담습니다.
- bride_weight와 truck_weight 배열의 첫 트럭 무게 합이 weight 이하일 때만 첫 트럭이 통과할 수 있습니다.
  - 들어오는 트럭의 무게를 bridge_weight에 더하고, bridge 배열에 그 트럭의 무게와 트럭이 지나가는데 걸리는 시간이 감긴 배열을 넣습니다.
- 다리에 트럭이 더 이상 들어올 수 없을 때, 가장 먼저 들어온 트럭을 내보냅니다.
  - 나가는 트럭의 무게를 bridge_weight에서 빼고, 지난 시간을 answer에 갱신합니다.
- 마지막 트럭이 통과하는데 1초가 지나야 하므로 1초를 더해줍니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge_weight = 0;
  let bridge = [];

  while (truck_weights.length || bridge.length) {
    if (bridge_weight + truck_weights[0] <= weight && bridge.length < bridge_length) {
      const incomingTruckWeight = truck_weights.shift();
      bridge_weight += incomingTruckWeight;
      bridge.push([incomingTruckWeight, answer + bridge_length]);
      answer++;
    } else {
      const [outgoingTruckWeight, passedTime] = bridge.shift();
      if (answer < passedTime) {
        answer = passedTime;
      }
      bridge_weight -= outgoingTruckWeight;
    }
  }
  return answer + 1;
}
