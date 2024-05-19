/*
### Approach
- BFS 알고리즘을 사용하여 각 층 노드들의 평균을 계산하고 배열에 담아서 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const answer = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    const average = level.reduce((sum, value) => sum + value, 0) / levelLength;
    answer.push(average);
  }

  return answer;
};
