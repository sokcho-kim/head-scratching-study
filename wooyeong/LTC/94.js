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
 * @return {number[]}
 */

var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const resultL = inorderTraversal(root.left);
  const resultR = inorderTraversal(root.right);

  return [...resultL, root.val, ...resultR];
};
