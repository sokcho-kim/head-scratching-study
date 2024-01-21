/*
### Approach
- DFS 알고리즘을 사용하여 트리를 탐색하면서 최솟값과 최댓값을 갱신합니다.
- 해당 노드가 leaf 노드일 때, 최솟값과 최댓값의 차이를 계산하고 가장 큰 차이값을 구합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
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
var maxAncestorDiff = function (root) {
  let diff = 0;
  let minValue = 100000;
  let maxValue = 0;

  const dfs = (node, minValue, maxValue) => {
    minValue = node.val < minValue ? node.val : minValue;
    maxValue = node.val > maxValue ? node.val : maxValue;
    if (!node.left && !node.right) {
      diff = Math.max(diff, maxValue - minValue);
      return;
    }
    if (node.left) dfs(node.left, minValue, maxValue);
    if (node.right) dfs(node.right, minValue, maxValue);
  };

  dfs(root, minValue, maxValue);
  return diff;
};
