/*
- Approach
node.length를 구하고, node.length - n - 1에서 node.next에 node.next.next를 연결해줍니다.

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = head;
  let nodeCount = 0;

  while (node) {
    node = node.next;
    nodeCount++;
  }

  if (nodeCount === n) {
    head = head.next;
    return head;
  }

  let removedNodeIndex = nodeCount - n - 1;
  node = head;
  nodeCount = 0;

  while (node) {
    if (nodeCount === removedNodeIndex) {
      node.next = node.next.next;
    }
    node = node.next;
    nodeCount++;
  }

  return head;
};
