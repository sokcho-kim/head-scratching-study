function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let onBridge = []; // 다리를 건너는 트럭의 무게를 저장합니다.
  let times = []; // 다리를 건너는 트럭이 다리를 완전히 건너는데 남은 시간을 저장합니다.

  while (truck_weights.length > 0 || onBridge.length > 0) {
    time++; // 시간을 증가시킵니다.

    if (times.length > 0 && times[0] === time) {
      // 첫 번째 트럭이 다리를 건넜다면
      onBridge.shift(); // 다리를 건너는 트럭에서 제거합니다.
      times.shift(); // 시간 배열에서도 제거합니다.
    }

    let totalWeight = onBridge.reduce((acc, cur) => acc + cur, 0);
    if (truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {
      if (onBridge.length < bridge_length) {
        // 다리에 트럭이 더 올라갈 수 있다면
        onBridge.push(truck_weights.shift()); // 대기 트럭에서 하나를 다리로 옮깁니다.
        times.push(time + bridge_length); // 다리를 건너는데 필요한 시간을 추가합니다.
      }
    }
  }

  return time; // 모든 트럭이 다리를 건넌 후의 총 시간을 반환합니다.
}

/**
 * # Intuition

트럭이 다리를 건너는 시뮬레이션은 큐(Queue) 자료 구조를 사용.
각 트럭이 다리에 진입하는 시점과 다리를 완전히 건너는 시점을 추적함으로써, 다리 위의 트럭 무게 총합이 다리가 견딜 수 있는 최대 무게를 초과하지 않도록 한다.

# Approach

1. **트럭 대기열 관리**: truck_weights 배열에서 트럭을 순차적으로 꺼내어 다리를 건너게 한다.
2. **다리 위 트럭 관리**: onBridge 배열을 사용하여 다리 위에 있는 트럭의 무게를 관리한다.
3. **시간 관리**: 각 트럭이 다리를 건너는데 필요한 시간을 times 배열에 저장한다. 이 배열은 각 트럭이 다리를 떠나는 시간을 나타낸다.
4. **시뮬레이션 실행**: 각 시간 단위마다 다리를 건너는 트럭을 업데이트하고, 새 트럭이 다리에 진입할 수 있는지 화인한다. 새 트럭이 다리에 진입할 수 있다면, 해당 트럭을 onBridge에 추가하고, 다리를 떠나는 시간을 times에 추가한다.

# Complexity

- Time complexity: O(n)
  n은 truck_weights 배열의 길이.
  각 트럭을 한 번씩 처리하며, 트럭이 다리를 건너는 시간 계산은 상수 시간 연산.

- Space complexity: O(n)
  onBridge와 times 배열을 사용하여 트럭의 무게와 다리를 건너는 시간을 저장한다.

 */
