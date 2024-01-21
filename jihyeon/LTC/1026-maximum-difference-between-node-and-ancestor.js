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
  if (root === null) return 0;
  let answer = 0;
  let min = root.val;
  let max = root.val;

  function helper(root, min, max) {
    if (root === null) return;
    answer = Math.max(answer, Math.abs(min - root.val), Math.abs(max - root.val));
    min = Math.min(min, root.val);
    max = Math.max(max, root.val);

    helper(root.left, min, max);
    helper(root.right, min, max);
  }
  helper(root, min, max);
  return answer;
};

/**
 * # Intuition

이진 트리의 루트가 주어졌을 때, 서로 다른 노드 a와 b가 존재하고 `v = |a.val - b.val|`이고 a가 b의 조상인 경우의 최대값 v를 구한다.
노드 a는 a의 모든 자식이 b와 같거나 a의 모든 자식이 b의 부모인 경우 b의 부모이다.

# Approach

1. 현재 노드를 기준으로, 조상 노드들 중 최소값(min)과 최대값(max)을 계속 추적한다.
2. 깊이 우선 탐색(DFS)을 사용한다. 모든 노드를 탐색하면서, 각 노드에서의 최소값과 최대값과의 차이를 계산합니다. 이 차이가 현재까지의 최대 차이(answer)보다 큰 경우, 이 값을 갱신한다.
3. 각 노드를 방문할 때마다, 그 노드의 값으로 최소값과 최대값을 업데이트한다.
4. 모든 노드의 탐색이 끝나면,(모든 재귀함수 호출 종료) 계산된 최대 차이(answer)를 반환한다.

# Complexity

- Time complexity:

O(n) : 모든 노드를 한 번씩 방문 한다.

- Space complexity:

O(n) : 재귀 호출로 인한 최악의 경우의 스택 공간
O(log n) : 균형 잡힌 트리인 경우

 */
