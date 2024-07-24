/*
- Approach
- FindElement 함수 내부에 root와 Set을 저장하고, root.val 값을 0으로 초기화합니다.
  - DFS 알고리즘을 통해 해당 노드의 자식 노드가 있을 경우 자식 노드를 탐색하고 각 노드의 값을 Set에 저장합니다.
- find 함수에서 Set의 has 메서드를 사용하여 root 트리 내의 target 값 여부를 확인합니다.

- Complexity
Time complexity : O(N)
Space complexity : O(N)
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
 */
var FindElements = function (root) {
  this.root = root;
  this.set = new Set();

  this.root.val = 0;
  dfs(this.root, this.set);
};

/**
 * @param {TreeNode} node
 * @param {Set} set
 */
var dfs = function (node, set) {
  set.add(node.val);

  if (node.left) {
    node.left.val = node.val * 2 + 1;
    dfs(node.left, set);
  }

  if (node.right) {
    node.right.val = node.val * 2 + 2;
    dfs(node.right, set);
  }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.set.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
