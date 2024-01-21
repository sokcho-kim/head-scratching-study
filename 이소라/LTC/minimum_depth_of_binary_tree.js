/*
### Approach
- BFS 알고리즘을 사용하여 트리를 탐색하면서 트리의 깊이가 낮은 경우 트리 깊이를 갱신합니다.
- 노드의 왼쪽 자식 노드 또는 오른쪽 자식 노드가 있을 경우, 노드와 현재 깊이에서 1을 더한 깊이를 가진 배열을 큐에 푸시합니다.
- 노드의 왼쪽 자식 노드와 오른쪽 자식 노드 모두 없을 경우, 현재 길이가 저장된 깊이보다 작은 경우 깊이를 갱신합니다.
- 현재 깊이가 저장된 깊이보다 깊은 경우 더 이상 그 노드를 탐색할 이유가 없으므로 넘어갑니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(Height)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let answer = 50000;
  const queue = [[root, 1]];

  if (!root) {
    return 0;
  }

  while (queue.length) {
    const [node, depth] = queue.shift();
    if (depth >= answer) continue;
    if (!node.left && !node.right) answer = depth;
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
  return answer;
};
