/*
### Approach
- numbers의 각 문자열이 담긴 배열 numArr를 만듭니다.
- numArr를 순회하면서 고정된 문자열에 하나씩 문자열을 추가해서 조합을 만듭니다.
- 조합된 수가 answer Set에 없고, 소수일 경우에만 answer Set에 추가합니다.
- answer Set의 size를 반환합니다.

### Complexity
- Time complexity : O(NlogN)
- Space complexity : O(N)
*/

function solution(numbers) {
  let answer = new Set();
  const numArr = numbers.split('');

  const isPrime = n => {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }

    return true;
  };

  const getPermutation = (arr, fixed) => {
    if (arr.length === 0) return;

    for (let i = 0; i < arr.length; i++) {
      const newFixed = fixed + arr[i];
      const newNumber = parseInt(newFixed);
      const copyArr = [...arr];
      copyArr.splice(i, 1);

      if (!answer.has(newNumber) && isPrime(newNumber)) {
        answer.add(newNumber);
      }

      getPermutation(copyArr, newFixed);
    }
  };

  getPermutation(numArr, '');

  return answer.size;
}
