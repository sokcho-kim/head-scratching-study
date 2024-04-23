/*
### Approach
- 노드 방향을 판별하여 지그재그 순서일 경우에는 단계 수를 더하고, 아닐 경우에는 1로 초기화합니다.
- 함수를 호출할 때마다 단계 수의 최댓값을 갱신하고, 노드가 없을 경우 함수를 종료합니다.

### Complexity
- Time complexity : O(H)
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
var longestZigZag = function (root) {
  let maxCount = 0;

  const dfs = (node, isLeft, count) => {
    if (!node) {
      return;
    }

    maxCount = Math.max(count, maxCount);

    if (isLeft) {
      dfs(node.right, false, count + 1);
      dfs(node.left, true, 1);
    } else {
      dfs(node.left, true, count + 1);
      dfs(node.right, false, 1);
    }
  };

  dfs(root, true, 0);
  dfs(root, false, 0);

  return maxCount;
};
