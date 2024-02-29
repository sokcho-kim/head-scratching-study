/*
### Approach
- BFS 알고리즘을 사용하여 트리를 탐색하면서 이전 노드보다 값이 큰 노드의 갯수를 갱신합니다.
- 이전 노드보다 해당 노드의 값이 클 경우, 노드의 수와 최대값을 갱신합니다.

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
var goodNodes = function (root) {
  let answer = 0;
  const queue = [[root, root.val]];

  if (!root) {
    return 0;
  }

  while (queue.length) {
    let [node, maxValue] = queue.shift();
    if (node.val >= maxValue) {
      answer++;
      maxValue = node.val;
    }
    if (node.left) queue.push([node.left, maxValue]);
    if (node.right) queue.push([node.right, maxValue]);
  }

  return answer;
};
