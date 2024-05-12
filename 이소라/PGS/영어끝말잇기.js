/*
### Approach
- 영어 단어를 저장해두는 Set을 만듭니다.
- 이전 단어 끝글자와 현재 단어의 앞글자가 일치하지 않거나, 현재 단어가 중복될 때의 사람과 차례를 반환합니다.

### Complexity
- Time complexity : O(N)
- Space complexity : O(N)
*/

function solution(n, words) {
  const wordSet = new Set();
  let lastLetter = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word.at(0);

    if (i === 0) {
      wordSet.add(word);
      lastLetter = word.at(-1);
      continue;
    }

    if (firstLetter !== lastLetter || wordSet.has(word)) {
      const person = (i % n) + 1;
      const turn = Math.ceil((i + 1) / n);
      return [person, turn];
    }

    wordSet.add(word);
    lastLetter = word.at(-1);
  }

  return [0, 0];
}
