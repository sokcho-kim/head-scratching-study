/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  // fast 포인터를 n 노드 만큼 앞으로 이동
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // 제거할 노드가 첫번째 노드일 경우
  if (!fast) return head.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  //제거 할 노드
  slow.next = slow.next.next;
  return head;
};

/**
# Intuition

연결 리스트의 끝에서 n 번째 노드를 제거하기위해 두개의 포인터를 사용해 한 번의 순회로 해결한다.

# Approach

두개의 포인터 사용 : fast, slow. fast 포인터는 slow 포인터보다 n노드 앞에 위치한다.

만약, fast가 null 이 되면 첫 번째 노드를 제거해야하는 것이기 때문에 head.next를 반환한다.

# Complexity

- Time complexity:
  O(n) : 연결 리스트의 모든 노드를 한 번씩 순회한다.

- Space complexity:
  O(1) : 추가적인 공간 사용하지 않는다.

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
