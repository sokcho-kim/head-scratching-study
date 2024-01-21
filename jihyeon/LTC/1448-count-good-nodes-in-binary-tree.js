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
  let count = 0;
  let max = root.val;

  function helper(root, max) {
    if (root === null) return 0;
    if (root.val >= max) count++;

    max = Math.max(max, root.val);
    helper(root.left, max);
    helper(root.right, max);
  }
  helper(root, max);
  return count;
};

/**
 * # Intuition

이진 트리 루트가 주어졌을 때, 루트에서 X까지의 경로에 X보다 큰 값을 가진 노드가 없는 경우 트리의 노드 X를 좋은 노드라고 한다.
이진 트리에서 좋은 노드의 수를 반환한다.

# Approach

1. max 변수를 사용해 현재 경로상의 최댓값을 추적한다.
2. 깊이 우선 탐색(DFS)방식으로 루트에서 x노드까지 탐색을 하며 '좋은 노드'여부를 판단한다.
3. 좋은 노드 : x까지의 경로에 x보다 같거나, 큰 값을 가진 root.val가 있을 경우에는 count 를 하나 올린다.
4. 재귀를 사용하여 트리의 모든 노드를 탐색한다.

# Complexity

- Time complexity:

O(n) : 모든 노드를 한 번씩 방문 한다.

- Space complexity:

O(n) : 재귀 호출로 인한 최악의 경우의 스택 공간
O(log n) : 균형 잡힌 트리인 경우

 */
