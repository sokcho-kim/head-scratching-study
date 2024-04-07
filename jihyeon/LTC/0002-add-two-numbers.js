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
function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let result = dummy;
  let sum = 0;
  carry = 0;

  while (l1 || l2 || carry) {
    sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    let num = sum % 10;
    carry = Math.floor(sum / 10);
    dummy.next = new ListNode(num);
    dummy = dummy.next;
  }
  return result.next;
};

/**
# Intuition

두 연결 리스트의 끝까지 두 연결 리스트의 각 자리를 더하고, 올림수(carry)를 다음 자리수에 더한다

# Approach

1. **dummy 노드 생성** : dummy노드를 사용해서 결과 연결 리스트의 시작점을 기억한다. 더하기 연산의 결과를 저장할 새로운 연결 리스트를 초기화 하는것이다.
2. **더하기 작업** : 두 연결 리스트를 동시에 순회하면서, 각 노드의 값을 더하고, 10으로 나눈 나머지를 새 노드로 만들어 결과 리스트에 추가한다.
3. **올림수 발생시** : 10으로 나눈 몫은 올림수로 다음 자리수에 더해진다.
4. **반복 진행** : 두 리스트 중 하나가 더 길 경우, 더 긴 리스트의 남은 부분을 처리해야 하고, 모든 더하기 연산이 끝난 후에도 올림수가 남아있다면, 이를 리스트의 마지막에 추가해야한다.

# Complexity

- Time complexity: $$O(\max(n, m))$$ 여기서 \(n\)과 \(m\)은 각각 두 연결 리스트의 길이
- Space complexity: $$O(\max(n, m))$$ 결과를 저장하기 위해 새로운 리스트를 만들어야한다.

 */
