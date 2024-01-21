/*
- Approach
node.length를 구해서, linked list의 중간 지점을 찾아서 반환합니다

- Complexity
Time complexity : O(N)
Space complexity : O(1)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let node = head;
  let answer = head;
  let nodeCount = 0;

  while (node) {
    node = node.next;
    nodeCount++;
  }

  let middleIndex = Math.floor(nodeCount / 2);

  while (middleIndex) {
    answer = answer.next;
    middleIndex--;
  }

  return answer;
};
