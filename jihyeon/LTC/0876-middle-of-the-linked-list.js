/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  if (!fast.next) return head;

  while (fast.next) {
    if (!fast.next.next) {
      return slow.next;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

/**
# Intuition

링크드 리스트의 중간 노드 또는 중간 노드가 두 개일 경우 두번 째를 반환한다고 할 때, 각각의 노드를 저장한뒤 해당되는 노드를 반환한다.

# Approach

1. 포인터 초기화: slow와 fast 두 포인터를 리스트의 시작점인 head에 포인터를 초기화한다.
2. 엣지 케이스 처리: 만약 fast의 다음 노드(fast.next)가 없다면, 리스트에 노드가 하나만 있으므로 그대로 head를 반환한다.
3. 순회: fast 포인터가 리스트의 끝에 도달할 때까지 순회를 계속한다. 이 때, fast는 두 노드씩 이동하고 slow는 한 노드씩 이동합니다.

4. 중간 노드 확인:
   - 만약 fast의 다음 노드가 없다면(fast.next가 null), 현재 slow는 중간 노드를 가리키고 있으므로 slow를 반환한다.
   - 만약 fast의 다음 다음 노드가 없다면(fast.next.next가 null), 이는 리스트의 길이가 짝수라는 것을 의미하므로, 두 중간 노드 중 두 번째 노드인 slow.next를 반환한다.

# Complexity

- Time complexity:
  O(n) : 연결 리스트의 절반만 순회한다.

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
