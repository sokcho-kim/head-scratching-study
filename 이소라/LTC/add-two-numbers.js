/*
### Approach
- Linked List l1과 l2의 각각 노드값의 합을 가진 Linked List를 만듭니다.
- 두 노드 값의 합이 10 이상인 경우, 합에서 10을 뺀 값만 갖고 다음 노드의 값에 1을 더해줍니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let temp = result;
  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    }

    temp.next = new ListNode(sum);
    temp = temp.next;

    sum = carry;
    carry = 0;
  }

  return result.next;
};
