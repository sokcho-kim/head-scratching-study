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
  // 순서를 바꿀 노드가 없으면 바로 리턴
  if (!head || !head.next) return head;

  // 임시 노드 생성: 교환된 노드들의 새로운 리스트의 시작점을 가리킴
  let temp = new ListNode();

  let prev = temp; // 교환될 쌍의 마지막노드를 가리키는 포인터
  let cur = head; // 현재 처리할 노드 쌍의 첫 번째 노드 가리키는 포인터
  while (cur && cur.next) {
    // 첫 번째 노드와 두 번째 노드 교환
    prev.next = cur.next;
    cur.next = prev.next.next;
    prev.next.next = cur;

    // 다음 쌍으로 포인터 이동
    prev = cur;
    cur = cur.next;
  }
  return temp.next;
};

/**
# Intuition

연결리스트에서 각 노드 쌍을 바꾸기 위해 두 개의 포인터를 사용한다.

# Approach

교환할 노드가 없는 경우(노드가 없거나 하나만 있는 경우), 리스트의 head를 그대로 반환한다.

1. 연결 리스트의 노드들을 새로운 순서대로 연결하기 위해 임시 노드(temp)를 생성한다.
2. prev와 cur 두 포인터를 사용하여, 현재 노드(cur)와 그 다음 노드의 순서를 교환한다.
3. 교환 과정에서, 첫 번째 노드를 두 번째 노드 다음에 연결하고, 두 번째 노드를 첫 번째 노드의 이전 노드(prev)에 연결한다.
4. 이렇게 모든 노드 쌍에 대해 순서를 교환한 후, 포인터를 이동시킨다.
5. 전체 노드 쌍을 교환한 후, temp의 다음 노드를 반환한다.(순서가 변경된 새로운 head ListNode )

# Complexity

- Time complexity:
  O(n) : 연결 리스트의 모든 노드를 한 번씩 순회한다.

- Space complexity:
  O(1) : 추가적인 공간 사용하지 않는다.
 */
