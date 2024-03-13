/*
### Approach
- wires의 관계를 Map에 저장합니다.
- 끊을 전력망의 인덱스가 주어졌을 때, 연결되어 있지 않은 노드들을 Set에 저장합니다.
- 둘로 나눈 전령망의 차이는 (n - leftNode) - leftNode입니다.
- for 루프문을 돌면서 wires 전력망을 차례대로 끊고 전력망의 차이가 가장 작은 값을 반환합니다.

### Complexity
- Time complexity : O(N^2)
- Space complexity : O(N)
*/

function solution(n, wires) {
  let answer = n;
  const wireMap = new Map();

  for (let i = 0; i < wires.length; i++) {
    const [startNode, endNode] = wires[i];
    const startNodeNeighbors = wireMap.get(startNode);
    const endNodeNeighbors = wireMap.get(endNode);
    wireMap.set(startNode, startNodeNeighbors ? [...startNodeNeighbors, endNode] : [endNode]);
    wireMap.set(endNode, endNodeNeighbors ? [...endNodeNeighbors, startNode] : [startNode]);
  }

  const getDiffBetweenWires = severedWireIndex => {
    const leftWires = new Set();
    const [startWire, severedWire] = wires[severedWireIndex];
    leftWires.add(startWire);
    for (let startNode of leftWires.values()) {
      wireMap.get(startNode).forEach(endNode => {
        if (endNode !== severedWire) {
          leftWires.add(endNode);
        }
      });
    }
    return Math.abs(n - leftWires.size * 2);
  };

  for (let severedWireIndex = 0; severedWireIndex < wires.length; severedWireIndex++) {
    answer = Math.min(getDiffBetweenWires(severedWireIndex), answer);
  }

  return answer;
}
