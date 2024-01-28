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
  if (root === null) return 0;
  return helper(root);
};

function helper(root) {
  if (root === null) return Infinity;
  if (root.left === null && root.right === null) return 1;

  return 1 + Math.min(helper(root.left), helper(root.right));
}

/**
 * # Intuition

루트 노드에서 가장 가까운 리프노드까지의 최단 경로를 구한다.

# Approach

1. 가장 가까운 리프노드를 찾기 위해서 Math.min을 사용해서 왼쪽과 오른쪽 노드 방향 중 깊이가 낮은 것을 선택한다.
2. 단, root 가 null 값으로 존재하는 경우에는 Infinity값을 주어서 Math.min 계산에서 제외 되도록한다.
3. root.left와 root.right 이 null 인 경우에는 마지막 리프 노드 이기 때문에 1을 반환하여 해당 노드 값 갯수를 카운팅한다.

# Complexity

- Time complexity:

O(n) : 모든 노드를 한 번씩 방문 한다.

- Space complexity:
  O(n) : 재귀 호출로 인한 최악의 경우의 스택 공간
  O(log n) : 균형 잡힌 트리인 경우

 */
