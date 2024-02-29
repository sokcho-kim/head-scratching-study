/*
### Approach
- 그래프를 Map 객체로 만들어서 해당 노드에 대한 들어오는 간선 갯수와 나가는 간선 갯수를 저장합니다.
- 각 그래프의 특징을 조건문으로 작성하여 해당 그래프의 갯수를 계산합니다.
  - 들어오는 간선 갯수가 2 이상이고 나가는 간선 갯수가 없는 노드는 생성된 정점입니다.
  - 들어오는 간선 갯수가 없는 노드는 막대그래프의 꼭지점입니다.
  - 들어오는 간선 갯수와 나가는 간선 갯수가 2 이상인 노드는 8자 그래프의 중심입니다.
  - 생성된 정점에서 들어오는 간선 갯수는 모든 그래프의 총 갯수입니다.
- 모든 그래프의 총 갯수에서 막내그래프 갯수와 8자 그래프의 갯수를 빼면 도넛 그래프의 갯수가 나옵니다.
- 생성된 정점 노드, 도넛 그래프 갯수, 막대 그래프 갯수, 8자 그래프 갯수를 배열에 담아 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

function solution(edges) {
  const answer = new Array(4).fill(0);
  const nodeMap = new Map();

  edges.forEach(([inNode, outNode]) => {
    if (!nodeMap.has(inNode)) {
      nodeMap.set(inNode, [1, 0]);
    } else {
      const [inNodeCount, outNodeCount] = nodeMap.get(inNode);
      nodeMap.set(inNode, [inNodeCount + 1, outNodeCount]);
    }

    if (!nodeMap.has(outNode)) {
      nodeMap.set(outNode, [0, 1]);
    } else {
      const [inNodeCount, outNodeCount] = nodeMap.get(outNode);
      nodeMap.set(outNode, [inNodeCount, outNodeCount + 1]);
    }
  });

  for (const [node, nodeCounts] of nodeMap) {
    const [inNodeCount, outNodeCount] = nodeCounts;
    if (inNodeCount >= 2 && outNodeCount === 0) {
      answer[0] = node;
    }

    if (inNodeCount === 0) {
      answer[2]++;
    }

    if (inNodeCount >= 2 && outNodeCount >= 2) {
      answer[3]++;
    }
  }

  const totalGraphCount = nodeMap.get(answer[0])[0];
  answer[1] = totalGraphCount - answer[2] - answer[3];

  return answer;
}
