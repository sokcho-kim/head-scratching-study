/*
- Approach
node.next와 node.next.next가 존재할 때, node.next와 node.next.next의 위치를 바꿔줍니다.

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
var swapPairs = function (head) {
  let answer = new ListNode(0);
  let node = answer;
  answer.next = head;

  if (!head || !head.next) {
    return head;
  }

  while (node.next && node.next.next) {
    const node1 = node.next;
    const node2 = node.next.next;
    node.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    node = node.next.next;
  }

  return answer.next;
};
