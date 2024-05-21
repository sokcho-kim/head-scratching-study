/*
### Approach
- head 노드를 복사해서 starNode와 prevNode를 만듭니다.
  - left 이전까지 prevNode를 이동시킵니다.
  - right까지 노드의 순서를 반대로 정렬합니다.
- left부터 right까지 반대로 정렬된 노드가 저장된 startNode를 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(1)
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const startNode = new ListNode(0, head);
  let prevNode = startNode;

  for (let i = 0; i < left - 1; i++) {
    prevNode = prevNode.next;
  }

  let curNode = prevNode.next;

  for (let i = 0; i < right - left; i++) {
    const temp = prevNode.next;
    prevNode.next = curNode.next;
    curNode.next = curNode.next.next;
    prevNode.next.next = temp;
  }

  return startNode.next;
};
